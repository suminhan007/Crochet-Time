import {
    Icon,
    LandAlert,
    LandButton,
    LandDialog,
    LandLoading,
    LandMessage,
    LandSelect,
    LandState
} from "@suminhan/land-design";
import React, {useEffect,  useState} from "react";
import { CTWorksType } from "./type.ts";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {CT_DESIGN_FILTER_SELECT_TYPE_DATA, CT_DESIGN_FILTER_SELECT_TYPE_DATA_EN, CT_DESIGN_WORKS_DATA} from "./mock.ts";
import supabase from "../../utils/supabse.ts";
import timeAgo from "../../utils/timeAgo.ts";

type Props = {
    isEnglish?: boolean;
}
const Studio: React.FC<Props> = ({ isEnglish}) => {
    const navigate = useNavigate();
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const getTypeIcon = (type: string) => {
        switch (type) {
            case CTWorksType.Draft:
                return (
                    <Icon
                        name="pen"
                        size={18}
                        strokeWidth={3}
                        stroke="var(--color-tag-8)"
                    />
                );
                break;
            case CTWorksType.Sketch:
                return (
                    <Icon
                        name="formatting-brush"
                        size={18}
                        stroke="var(--color-tag-4)"
                        strokeWidth={3}
                    />
                );
                break;
            case CTWorksType.Pattern:
                return <Icon name="text-file" size={18} stroke="var(--color-tag-5)" />;
                break;
            case CTWorksType.Product:
                return <Icon name="commodity" size={18} stroke="var(--color-tag-2)" />;
                break;
            case CTWorksType.Material:
                return <Icon name="folder" size={18} stroke="var(--color-tag-6)" />;
                break;
            case CTWorksType.Wool:
                return (
                    <Icon
                        name="inner-shadow-down"
                        size={18}
                        stroke="var(--color-tag-10)"
                        strokeWidth={4}
                    />
                );
                break;
            case CTWorksType.Course:
                return <Icon name="list-view" size={18} stroke="var(--color-tag-1)" />;
                break;
            case CTWorksType.Vlog:
                return (
                    <Icon
                        name="camera"
                        size={18}
                        strokeWidth={4}
                        stroke="var(--color-tag-9)"
                    />
                );
                break;
            default:
                return null;
                break;
        }
    };
    const [selectType, setSelectType] = useState<string | number>("all");
    const [selectSort, setSelectSort] = useState<string | number>("modify");

    const [toast, setToast] = useState<boolean>(false);
    const [toastText, setToastText] = useState<string>("");

    const handleShowToast = (show: boolean, text: string) => {
        setToastText(text);
        setToast(show);
        const timer = setTimeout(() => {
            setToast(false);
            clearTimeout(timer);
        }, 1000);
    };
    // 获取最新图片
    const fetchLatestProjects = async () => {
        const {data:{user}} = await supabase.auth.getUser();
        const userId = user?.id;
        const { data:projectData, error } = await supabase
            .from('CKTStudioTask') // 替换为你的表名
            .select('id,created_at, edit_time, project_name, project_type')
            .eq('user_id',userId)
            .order('edit_time', { ascending: false })// 按修改时间倒序排列

        if (error) {
            console.error('Error fetching image:', error);
        } else if (projectData && projectData.length > 0) {
            const transferData = projectData.map(i => Object.assign(i,{type:i.project_type,name:i.project_name}))
            setData(transferData);
        }
        setLoading(false);
    };

    // 初始化时获取最新图片
    useEffect(() => {
        setLoading(true);
        fetchLatestProjects();
    }, []);

    const createProject = async (type:string) => {
        let initData:any;
        switch (type) {
            case CTWorksType.Draft: initData = [ {layer_id:'1',layer_name:'1',path_data:[]}]
        }
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            const id =  `${Date.now()}`;
            const res = await supabase.from('CKTStudioTask').insert([{
                id: `${id}`,
                project_name: 'Untitled',
                project_type: type,
                edit_time: Date.now(),
                data: initData
            }]).eq('user_id', user?.id)
            if(res.error){}else{
                navigate(`worktop?type=${type}?project_id=${id}`);
            }
        }else{
            handleShowToast(true,'请先登录')
        }
    }
    const [showDeleteDialog,setShowDeleteDialog] = useState(false);
    const [selectId, setSelectId] = useState<string>("");
    const handleDeleteColorCard = async () => {
        const response = await supabase.from('CKTStudioTask').delete().eq('id',selectId);
        if(response.status<300 && response.status>100){
            window.location.reload();
            handleShowToast(true,'删除成功')
        }else{
            handleShowToast(true,'删除失败')
        }
        setShowDeleteDialog(false);
    }
    return (
        <div className="flex-1 flex column items-center gap-24 width-100 height-100 overflow-auto p-24">
            <div
                className="flex justify-between width-100"
                style={{ maxWidth: "1200px" }}
            >
                <div className="flex gap-12">
                    <LandSelect
                        placeholder={isEnglish?'Type of work':"作品类型"}
                        width={120}
                        selected={selectType}
                        data={isEnglish?CT_DESIGN_FILTER_SELECT_TYPE_DATA_EN:CT_DESIGN_FILTER_SELECT_TYPE_DATA}
                        onChange={(item) => {
                            setSelectType(item.value);
                            if (item.value === "all") {
                                setData(CT_DESIGN_WORKS_DATA);
                            } else {
                                const newData = CT_DESIGN_WORKS_DATA?.filter(
                                    (i) => i.type === item.value
                                );
                                setData(newData);
                            }
                        }}
                    />
                    <LandSelect
                        placeholder={isEnglish?'Sort by':"排序方式"}
                        width={120}
                        selected={selectSort}
                        data={[
                            { value: "create", label: isEnglish?'Creation time':"创建时间" },
                            { value: "modify", label: isEnglish?'Edit time':"修改时间" },
                        ]}
                        onChange={(item) => setSelectSort(item.value)}
                    />
                </div>
                <StyledNewButton className="relative">
                    <LandButton
                        type="background"
                        status="primary"
                        icon={<Icon name="add" strokeWidth={4} />}
                        text={isEnglish?'Create New Works':"新建作品"}
                    />
                    <div
                        className="drop-container absolute pt-8 width-100 transition"
                        style={{ top: "100%", zIndex: 1 }}
                    >
                        <div className="width-100 border bg-white radius-8 py-12">
                            {(isEnglish?CT_DESIGN_FILTER_SELECT_TYPE_DATA_EN:CT_DESIGN_FILTER_SELECT_TYPE_DATA)?.filter(
                                (_i, idx) => idx > 0
                            )?.map((item, index) => (
                                <div
                                    key={item.value ?? index}
                                    className="flex items-center gap-8 px-12 py-8 fs-14 cursor-pointer hover:bg-gray transition"
                                    onClick={() => createProject?.(item.value)}
                                >
                                    {getTypeIcon(item.value)}
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </StyledNewButton>
            </div>

            {loading ? <div className={'flex both-center width-100 height-100'}><LandLoading/></div> : data?.length > 0
                    ? <div
                        className="grid gap-16 width-100 height-100"
                    style={{
                        maxWidth: "1200px",
                        gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
                    }}
                >
                    {data?.map((item, index) => (
                        <div
                            key={item.id ?? index}
                            className="flex column gap-8 hover-translate-y-4 transition cursor-pointer"
                            onClick={() => navigate(`worktop?type=${item.type}?project_id=${item.id}`)}
                        >
                            <div className="flex both-center width-100 ratio-1 radius-12 bg-primary-light">
                            </div>
                            <div className="flex items-center gap-8 fs-14 color-gray-1 fw-500">
                            {getTypeIcon(item.type)}
                                {item.project_name || (isEnglish?'untitled':'未命名')}
                            </div>
                            <div className="flex items-center justify-between fs-12 color-gray-4">{timeAgo(item.edit_time,isEnglish)}
                                <LandButton icon={<Icon name={'delete'} size={16}/>} size={'small'} type={'text'} onClick={e => {
                                    e.stopPropagation();
                                    setShowDeleteDialog(true);
                                    setSelectId(item.id)
                                }}/>
                            </div>
                        </div>
                    ))}
                </div> : <div className={'flex both-center width-100 height-100'}><LandState type={'empty'}
                                                                               title={isEnglish?'No work yet, click New to start creating!':'暂无作品，点击新建开始创作吧'}/>
                </div>}
            {toast && <LandMessage show={toast} text={toastText} />}
            <LandDialog
                title={'确认删除该项目？'}
                show={showDeleteDialog}
                onClose={() => setShowDeleteDialog(false)}
                onCancel={() => setShowDeleteDialog(false)}
                onSubmit={() => handleDeleteColorCard()}
            >
                <LandAlert type={'error'} title={'删除后不可恢复，项目中上传的素材也会一起删除，请谨慎操作！'}/>
            </LandDialog>
        </div>
    );
};

const StyledNewButton = styled.div`
    .drop-container {
        opacity: 0;
        pointer-events: none;
    }

    &:hover {
        .drop-container {
            opacity: 1;
            pointer-events: auto;
        }
    }
`;
export default Studio;
