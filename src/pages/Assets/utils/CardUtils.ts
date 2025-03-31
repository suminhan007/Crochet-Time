import supabase from "../../../utils/supabse.ts";

/**
 * Shows a toast message that automatically hides after a timeout
 * @param setToast - State setter for toast visibility
 * @param setToastText - State setter for toast message
 * @param show - Whether to show the toast
 * @param text - Toast message text
 * @param timeout - Time in ms before hiding the toast
 */
export const handleShowToast = (
  setToast: (show: boolean) => void,
  setToastText: (text: string) => void,
  show: boolean,
  text: string,
  timeout = 1000
) => {
  setToastText(text);
  setToast(show);
  const timer = setTimeout(() => {
    setToast(false);
    clearTimeout(timer);
  }, timeout);
};

/**
 * Downloads a file from Supabase storage
 * @param url - Signed URL of the file
 * @param folderPath - Path of the folder in storage
 * @param handleToast - Function to show toast messages
 */
export const handleDownloadFile = async (
  url: string,
  folderPath: string,
  handleToast: (show: boolean, text: string) => void
) => {
  const downloadUrl = url.split('?token=')[0].split(`CroKnitTime/${folderPath}/`)[1];
  const response = await supabase.storage.from('CroKnitTime').download(`${folderPath}/${downloadUrl}`);

  if (response.error) {
    handleToast(true, '下载失败，请稍后再试');
  } else {
    // Create an a tag for downloading
    const link = document.createElement('a');
    link.href = URL.createObjectURL(response.data);
    link.download = downloadUrl.split('.png')[0]; // Set download filename
    link.click();
    // Release memory
    URL.revokeObjectURL(link.href);
  }
};

/**
 * Publishes a card to the community
 * @param tableName - Name of the table to update
 * @param cardId - ID of the card to publish
 * @param setPublishLoading - State setter for loading state
 * @param handleToast - Function to show toast messages
 * @param setShowDialog - State setter for dialog visibility
 */
export const handlePublishCard = async (
  tableName: string,
  cardId: string,
  setPublishLoading: (loading: boolean) => void,
  handleToast: (show: boolean, text: string) => void,
  setShowDialog: (show: boolean) => void
) => {
  setPublishLoading(true);
  const res = await supabase.from(tableName).update({
    public: true,
  }).eq('id', cardId);

  if (res.error) {
    handleToast(true, '发布失败，请稍后重试');
  } else {
    handleToast(true, '发布成功，前往社区查看吧');
  }

  setShowDialog(false);
  setPublishLoading(false);
};

/**
 * Deletes a card from the database
 * @param tableName - Name of the table to delete from
 * @param cardId - ID of the card to delete
 * @param handleToast - Function to show toast messages
 * @param setShowDialog - State setter for dialog visibility
 */
export const handleDeleteCard = async (
  tableName: string,
  cardId: string,
  handleToast: (show: boolean, text: string) => void,
  setShowDialog: (show: boolean) => void
) => {
  const response = await supabase.from(tableName).delete().eq('id', cardId);

  if (response.status < 300 && response.status > 100) {
    window.location.reload();
  } else {
    handleToast(true, '删除失败');
  }

  setShowDialog(false);
}; 