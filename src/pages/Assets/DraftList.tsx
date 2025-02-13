import timeAgo from "../../utils/timeAgo.ts";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import supabase from "../../utils/supabse.ts";
import {LandLink, LandLoading, LandState} from "@suminhan/land-design";

type Props = {

}
const DraftList: React.FC<Props> = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [draftData,setDraftData] = useState<{id:string,type:string,name:string,edit_time:string}[]>([]);
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
            setDraftData(transferData);
        }
        setLoading(false);
    };

    // 初始化时获取最新图片
    useEffect(() => {
        setLoading(true);
        fetchLatestProjects();
    }, []);
    return <> {loading ? <div className={'width-100 flex-1 flex both-center'}>
            <LandLoading />
        </div> : (draftData && draftData?.length>0) ? <> {draftData?.map((item, index) => (
        <div
            key={item.id ?? index}
            className="flex column gap-8 hover-translate-y-4 transition cursor-pointer"
            onClick={() => navigate(`/type=studio/worktop?type=${item.type}?project_id=${item.id}`)}
        >
            <div className="width-100 ratio-1 bg-gray radius-12"></div>
            <div className="flex items-center gap-8 fs-14 color-gray-1 fw-500">
                {item.name ?? '未命名'}
            </div>
            <div className="fs-12 color-gray-4">{timeAgo(item.edit_time)}</div>
        </div>
    ))}</> : <div className={'width-100 flex-1 flex items-center justify-center'}>
        <LandState type={'empty'} title={<>暂无草稿, <LandLink
            onClick={() => navigate('/type=studio')}>前往绘制</LandLink></>}/>
    </div>}
       </>
}
export default DraftList;
