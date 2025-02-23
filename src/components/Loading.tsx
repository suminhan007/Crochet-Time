import React from "react";
import {LandLoading} from "@suminhan/land-design";
type Props = {
    isEnglish?: boolean;
    loadingText?:React.ReactNode;
    enLoadingText?:React.ReactNode;
}
const Loading:React.FC<Props> = ({
                                     isEnglish,
                                     loadingText='加载中...',
    enLoadingText='loading...',
}) => {
    return <div className={'width-100 height-100 flex column both-center gap-8 fs-12 color-gray-3'}>
        <LandLoading/>
        {isEnglish ? enLoadingText:loadingText}
    </div>
}
export default Loading;