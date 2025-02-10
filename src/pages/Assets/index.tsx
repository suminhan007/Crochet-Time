import React, {useEffect, useState} from "react";
import supabase from "../../utils/supabse.ts";
import {LandLink, LandLoading, LandMenu, LandState} from "@suminhan/land-design";
import {Assets_Menu_Data} from './mock.ts';
import {useNavigate} from "react-router-dom";

type Props = {

}
const Assets:React.FC<Props> = ({

}) => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState<string>('color_card');
    const [loading, setLoading] = useState<boolean>(false);
    const [images, setImages] = useState<string[]>([]);
    // 获取最新图片
    const fetchLatestImage = async () => {
        const {data} = await supabase.auth.getSession();
        console.log(data)
        const {data:{user}} = await supabase.auth.getUser();
        const userId = user?.id;
        const { data:ImgData, error } = await supabase
            .from('colorFetchImageCollect') // 替换为你的表名
            .select('img_url')
            .eq('user_id',userId)
            .order('created_at', { ascending: false })// 按创建时间倒序排列

        if (error) {
            console.error('Error fetching image:', error);
            setLoading(false);
        } else if (ImgData && ImgData.length > 0) {
            console.log(ImgData);
                setImages(ImgData?.map(i => `https://hjlispmloverkigqdirr.supabase.co/storage/v1/object/public/ColorCardCollect/${i.img_url}`)); // 更新图片 URL
            setLoading(false);
        }
    };

    // 初始化时获取最新图片
    useEffect(() => {
        setLoading(true);
        fetchLatestImage();
    }, []);

    // 监听实时插入事件
    useEffect(() => {
        const subscription = supabase
            .channel('ColorCardCollect') // 自定义频道名称
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'colorFetchImageCollect' },
                (payload) => {
                    const newImageUrl = `https://hjlispmloverkigqdirr.supabase.co/storage/v1/object/public/ColorCardCollect/${payload.new.img_url}`; // 获取新插入的图片 URL
                    setImages([...images,newImageUrl]); // 更新图片 URL
                }
            )
            .subscribe();

        // 清理监听器
        return () => {
            subscription.unsubscribe();
        };
    }, []);

 return (
     <div className={'flex width-100 height-100 bg-gray'}>
         <div className={'py-16'}>
             <LandMenu
                 data={Assets_Menu_Data}
                 active={menu}
                 onChange={item => setMenu(item.key)}
                 direction={'column'}
                 theme={{
                     lineColor:'transparent',
                 }}
                 border={false}
                style={{height:'fit-content'}}
             />
         </div>
         <div className={'flex-1 pr-16 py-16 height-100'}>
             <div className={'flex both-center width-100 height-100 bg-white radius-12'}>
                 {loading ? <>
                     <LandLoading />
                 </> : images?.length >0 ? <div className={'width-100 height-100 '}>
                     {images?.map(i => <img src={i} width={100}/>)}
                 </div> : <LandState type={'empty'} title={<>暂无色卡, <LandLink onClick={() => navigate('/type=aids-colorPicker')}>前往制作</LandLink></>}/>}
             </div>
         </div>
     </div>
 )
}

export default Assets;
