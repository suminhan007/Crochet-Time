import supabase from "../../utils/supabse.ts";
import { CommunityCardBase, CommunityUser } from "./types";

/**
 * Shows a toast message that automatically hides after a timeout
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
 * Fetches community card data with user information and signed URLs
 */
export const fetchCommunityCardData = async <T extends CommunityCardBase>(
  tableName: string,
  selectFields: string,
  folderPath: string,
  setData: (data: T[]) => void,
  setLoading: (loading: boolean) => void
) => {
  try {
    const { data: cardData, error } = await supabase
      .from(tableName)
      .select(selectFields)
      .eq('public', true);

    if (error) {
      console.error(`Error fetching ${tableName}:`, error);
      return;
    }

    if (cardData && cardData.length > 0) {
      // Get signed URLs for images
      const { data: urlData, error: urlError } = await supabase
        .storage
        .from('CroKnitTime')
        .createSignedUrls(cardData.map(i => `${folderPath}/${i.img_url}`), 60);

      if (urlError) {
        console.error('Error fetching signed URLs:', urlError);
        return;
      }

      // Get signed URLs for avatars
      const { data: avatarData, error: avatarError } = await supabase
        .storage
        .from('CroKnitTime')
        .createSignedUrls(cardData.map(i => `userAvatars/${i.users.avatar_url}`), 60);

      if (avatarError) {
        console.error('Error fetching avatar URLs:', avatarError);
        return;
      }

      // Process the data with signed URLs
      const processedData = cardData.map((item, idx) => ({
        ...item,
        img_url: urlData[idx].signedUrl,
        user: {
          ...item.users,
          avatar_url: avatarData[idx].signedUrl
        }
      }));

      setData(processedData);
    }
  } catch (error) {
    console.error(`Unexpected error fetching ${tableName}:`, error);
  } finally {
    setLoading(false);
  }
};

/**
 * Publishes a state to the community
 */
export const handleStatePublish = async (
  url: string,
  title?: string,
  desc?: string,
  handleToast: (show: boolean, text: string) => void,
  setShowDrawer: (show: boolean) => void
) => {
  if (!url) return;

  try {
    const blob = await fetch(url).then(res => res.blob());
    const fileName = `graphic-state-${Date.now()}.png`;

    const { data: imgData, error: imgError } = await supabase
      .storage
      .from('CroKnitTime/stateImages')
      .upload(fileName, blob);

    if (imgError) {
      console.error('Error uploading image:', imgError);
      handleToast(true, '发布失败，请稍后重试');
      return;
    }

    const { error: dbError } = await supabase
      .from('graphicState')
      .insert([{
        img_url: imgData?.path,
        title: title,
        description: desc,
      }]);

    if (dbError) {
      console.error('Error saving to database:', dbError);
      handleToast(true, '发布失败，请稍后重试');
      return;
    }

    handleToast(true, '发布成功');
    setShowDrawer(false);
  } catch (error) {
    console.error('Unexpected error publishing state:', error);
    handleToast(true, '发布失败，请稍后重试');
  }
}; 