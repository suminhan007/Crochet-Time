export interface CommunityUser {
  id: string;
  username: string;
  sex?: string;
  is_official?: boolean;
  avatar_url?: string;
}

export interface CommunityCardBase {
  id: string;
  img_url: string;
  user_id: string;
  users: CommunityUser;
}

export interface CommunityColorCard extends CommunityCardBase {
  colors: Array<{
    id: number;
    value: string;
  }>;
  description: string;
  origin_img_url: string;
}

export interface CommunityPixelCard extends CommunityCardBase {
  size?: string;
}

export interface CommunityFillCard extends CommunityCardBase {
  // Additional properties specific to FillCard if any
}

export interface CommunityImgPixelCard extends CommunityCardBase {
  // Additional properties specific to ImgPixelCard if any
}

export interface CommunityCKTCard extends CommunityCardBase {
  title?: string;
  description?: string;
}

export interface CommunityStateCard extends CommunityCardBase {
  title?: string;
  description?: string;
}

export interface CommunityInspirationCard extends CommunityCardBase {
  title?: string;
  description?: string;
}

export interface MenuDataItem {
  key: string;
  title: string;
  dropData?: {
    key: string;
    title: string;
  }[];
}

export interface CommunityProps {
  isEnglish?: boolean;
  user?: {
    id: string;
    userName: string;
  };
} 