import React, {useState} from "react";
import {LandAvatar, LandDialog, LandDropdown, LandLoading} from "@suminhan/land-design";
import supabase from "../../utils/supabse.ts";
import {useNavigate} from "react-router-dom";

type Props = {
    username: string;
    onLogoutSuccess: () => void;
    onDeleteSuccess?: () => void;
}
const UserAvatar: React.FC<Props> = ({
                                   username,
                                         onLogoutSuccess,
                                         onDeleteSuccess
                        }) => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState<boolean>(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [deleteLoading,setDeleteLoading] = useState<boolean>(false);
    const onLogout = async () => {
        const {error} = await  supabase.auth.signOut();
        if(error){
            setLoading(false);
            throw error;
        }else{
            setLoading(false);
            onLogoutSuccess?.()
        }
    }
    const onDeleteUser = async () => {
        const {data:getUserData,error:getUserError} = await supabase.auth.getUser();
        if(getUserError){
            throw getUserError;
        }else{
            const {  error } = await supabase.auth.admin.deleteUser(
                getUserData.user?.id
            )
            if(error){
                setDeleteLoading(false);
                throw error;
            }else{
                setDeleteLoading(false);
                onDeleteSuccess?.()
            }
        }
    }
    return (
        <>
            <LandDropdown
                placement={'right'}
                dropClassName={'mt-4 shadow-light'}
                toggleClassName={`${loading ? 'events-none':''}`}
                toggle={<LandAvatar size={36} name={loading ? undefined:username} content={loading ? <LandLoading size={16} color={'var(--color-primary-6)'}/> : ""}/>}
                dropContent={<div className={'flex column'}>
                    <a onClick={() => navigate('/login')}
                       className={'px-12 py-8 fs-14 color-gray-2 hover:bg-gray transition cursor-pointer no-wrap'}>切换账号</a>
                    <a onClick={() => {

                        setLoading(true);
                        onLogout?.()
                    }}
                       className={'px-12 py-8 fs-14 color-gray-2 hover:bg-gray transition cursor-pointer no-wrap'}>退出登录</a>
                    <a onClick={() => setShowDeleteDialog(true)}
                       className={'px-12 py-8 fs-14 color-gray-2 hover:bg-gray transition cursor-pointer no-wrap'}>注销账户</a>
                </div>}
            />
            <LandDialog
                mask
                show={showDeleteDialog}
                title={'确认注销账户？'}
                onClose={() => setShowDeleteDialog(false)}
                onCancel={() => setShowDeleteDialog(false)}
                onSubmit={onDeleteUser}
            >
                {deleteLoading ? <div>
                    <LandLoading/>
                    注销中...
                </div>:<div>
                    账户注销后所有数据将会删除，无法恢复。
                </div>}
            </LandDialog>
        </>
    )
}
export default UserAvatar;