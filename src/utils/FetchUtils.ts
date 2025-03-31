import supabase from "./supabse.ts";

/**
 * Fetches color card data from Supabase
 * @param setData - State setter for color card data
 * @param setLoading - State setter for loading state
 */
export const fetchColorCardData = async (
  setData: (data: any[]) => void,
  setLoading: (loading: boolean) => void
) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    const { data: cardData, error } = await supabase
      .from('colorCard')
      .select('id, img_url, colors, description, origin_img_url, public')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching color cards:', error);
      return;
    }

    if (cardData && cardData.length > 0) {
      const { data: urlData, error: urlError } = await supabase
        .storage
        .from('CroKnitTime')
        .createSignedUrls(cardData.map(i => `colorCards/${i.img_url}`), 60);

      const { data: originUrlData, error: originUrlError } = await supabase
        .storage
        .from('CroKnitTime')
        .createSignedUrls(cardData.map(i => `colorCards/${i.origin_img_url}`), 60);

      if (urlError || originUrlError) {
        console.error('Error fetching signed URLs:', urlError || originUrlError);
        return;
      }

      const processedData = cardData.map((item, idx) => ({
        ...item,
        img_url: urlData[idx].signedUrl,
        origin_img_url: originUrlData[idx].signedUrl
      }));

      setData(processedData);
    }
  } catch (error) {
    console.error('Unexpected error fetching color cards:', error);
  } finally {
    setLoading(false);
  }
};

/**
 * Fetches pixel card data from Supabase
 * @param setData - State setter for pixel card data
 * @param setLoading - State setter for loading state
 */
export const fetchPixelCardData = async (
  setData: (data: any[]) => void,
  setLoading: (loading: boolean) => void
) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    const { data: cardData, error } = await supabase
      .from('pixelCard')
      .select('id, img_url, size, public')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching pixel cards:', error);
      return;
    }

    if (cardData && cardData.length > 0) {
      const { data: urlData, error: urlError } = await supabase
        .storage
        .from('CroKnitTime')
        .createSignedUrls(cardData.map(i => `pixelCards/${i.img_url}`), 60);

      if (urlError) {
        console.error('Error fetching signed URLs:', urlError);
        return;
      }

      const processedData = cardData.map((item, idx) => ({
        ...item,
        img_url: urlData[idx].signedUrl
      }));

      setData(processedData);
    }
  } catch (error) {
    console.error('Unexpected error fetching pixel cards:', error);
  } finally {
    setLoading(false);
  }
};

/**
 * Fetches fill card data from Supabase
 * @param setData - State setter for fill card data
 * @param setLoading - State setter for loading state
 */
export const fetchFillCardData = async (
  setData: (data: any[]) => void,
  setLoading: (loading: boolean) => void
) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    const { data: cardData, error } = await supabase
      .from('fillCard')
      .select('id, img_url, public')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching fill cards:', error);
      return;
    }

    if (cardData && cardData.length > 0) {
      const { data: urlData, error: urlError } = await supabase
        .storage
        .from('CroKnitTime')
        .createSignedUrls(cardData.map(i => `fillCards/${i.img_url}`), 60);

      if (urlError) {
        console.error('Error fetching signed URLs:', urlError);
        return;
      }

      const processedData = cardData.map((item, idx) => ({
        ...item,
        img_url: urlData[idx].signedUrl
      }));

      setData(processedData);
    }
  } catch (error) {
    console.error('Unexpected error fetching fill cards:', error);
  } finally {
    setLoading(false);
  }
};

/**
 * Fetches image pixel card data from Supabase
 * @param setData - State setter for image pixel card data
 * @param setLoading - State setter for loading state
 */
export const fetchImgPixelCardData = async (
  setData: (data: any[]) => void,
  setLoading: (loading: boolean) => void
) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    const { data: cardData, error } = await supabase
      .from('imgPixelCard')
      .select('id, img_url, public')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching image pixel cards:', error);
      return;
    }

    if (cardData && cardData.length > 0) {
      const { data: urlData, error: urlError } = await supabase
        .storage
        .from('CroKnitTime')
        .createSignedUrls(cardData.map(i => `imgPixelCards/${i.img_url}`), 60);

      if (urlError) {
        console.error('Error fetching signed URLs:', urlError);
        return;
      }

      const processedData = cardData.map((item, idx) => ({
        ...item,
        img_url: urlData[idx].signedUrl
      }));

      setData(processedData);
    }
  } catch (error) {
    console.error('Unexpected error fetching image pixel cards:', error);
  } finally {
    setLoading(false);
  }
}; 