import React, {useEffect, useState} from "react";
import supabase from "../../utils/supabse.ts";
import {LandMenu} from "@suminhan/land-design";
import {Assets_Menu_Data} from './mock.ts';
import ColorCardList from "./ColorCardList.tsx";

type Props = {

}
const Assets:React.FC<Props> = ({

}) => {
    const [menu, setMenu] = useState<string>('color_card');
    const [loading, setLoading] = useState<boolean>(false);
    const [images, setImages] = useState<{ id:string,img_url:string,origin_img_url:string,colors: { id:number,value:string }[],description:string }[]>([]);
    // 获取最新图片
    const fetchLatestImage = async () => {
        const {data:{user}} = await supabase.auth.getUser();
        const userId = user?.id;
        const { data:ImgData, error } = await supabase
            .from('colorCard') // 替换为你的表名
            .select('id,img_url, colors, description, origin_img_url')
            .eq('user_id',userId)
            .order('created_at', { ascending: false })// 按创建时间倒序排列

        if (error) {
            console.error('Error fetching image:', error);
        } else if (ImgData && ImgData.length > 0) {
            const { data: UrlData, error:UrlError } = await supabase
                .storage
                .from('CroKnitTime')
                .createSignedUrls(ImgData?.map(i => `colorCards/${i.img_url}`), 60)
            const { data: OriginUrlData, error:OriginUrlError } = await supabase
                .storage
                .from('CroKnitTime')
                .createSignedUrls(ImgData?.map(i => `colorCards/${i.origin_img_url}`), 60)
            if(UrlError||OriginUrlError){
                console.log(UrlError, OriginUrlError)
            }else{
                const imgData = ImgData?.map((i,idx) => Object.assign(i, { img_url: UrlData[idx].signedUrl,origin_img_url:OriginUrlData[idx].signedUrl }))
                setImages(imgData); // 更新图片 URL
                console.log(ImgData,OriginUrlData[0],imgData)
            }
        }
        setLoading(false);
    };

    // 初始化时获取最新图片
    useEffect(() => {
        setLoading(true);
        fetchLatestImage();
    }, []);

    // 监听实时插入事件
    // useEffect(() => {
    //     const subscription = supabase
    //         .channel('CroKnitTime/colorCards') // 自定义频道名称
    //         .on(
    //             'postgres_changes',
    //             { event: 'INSERT', schema: 'public', table: 'colorCard' },
    //             async (payload) => {
    //                 const newImageUrl = payload.new.img_url; // 获取新插入的图片 URL
    //                 const { error } = await supabase
    //                     .storage
    //                     .from('CroKnitTime/colorCards')
    //                     .createSignedUrl(newImageUrl, 60)
    //                 if(error){
    //
    //                 }else{
    //                     setImages([...images,newImageUrl]); // 更新图片 URL
    //                 }
    //             }
    //         )
    //         .subscribe();
    //
    //     // 清理监听器
    //     return () => {
    //         subscription.unsubscribe();
    //     };
    // }, []);

 return (
     <div className={'flex width-100 height-100 bg-gray'}>
         <div className={'p-16'}>
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
             <div className={'flex column width-100 height-100 p-24 bg-white radius-12'}>
                 <ColorCardList loading={loading} data={images}/>
             </div>
         </div>
     </div>
 )
}

export default Assets;
