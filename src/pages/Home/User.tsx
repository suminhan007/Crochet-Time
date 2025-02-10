import React from "react";
import {LandAvatar, LandDropdown} from "@suminhan/land-design";

type Props = {
    username: string;
    onLogout?: () => void;
}
const User: React.FC<Props> = ({
                                   username,
    onLogout,
                        }) => {
    return (
        <LandDropdown
        placement={'right'}
        toggle={<LandAvatar name={username}/>}
        dropContent={<div>
            <a onClick={onLogout}>退出登录</a>
        </div>}
        />
    )
}
export default User;