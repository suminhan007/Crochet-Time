import { MenuDataItem } from "./types";

export const menuData: MenuDataItem[] = [
  { key: 'ckt', title: 'CKT' },
  { key: 'state', title: '动态' },
  { key: 'inspiration', title: '灵感' },
  {
    key: 'publicAssets',
    title: '公开素材',
    dropData: [
      { key: 'colorCard', title: '色卡' },
      { key: 'fillCard', title: '配色卡' },
      { key: 'pixelCard', title: '像素卡' },
      { key: 'imgPixelCard', title: '像素图' }
    ]
  }
];

export const enMenuData: MenuDataItem[] = [
  { key: 'ckt', title: 'CKT' },
  { key: 'state', title: 'State' },
  { key: 'inspiration', title: 'Inspiration' },
  {
    key: 'publicAssets',
    title: 'public Assets',
    dropData: [
      { key: 'colorCard', title: 'ColorCard' },
      { key: 'fillCard', title: 'ColorFillCard' },
      { key: 'imgPixelCard', title: 'Img Pixel Card' }
    ]
  }
];

export const COMMUNITY_TABLES = {
  COLOR_CARD: 'colorCard',
  PIXEL_CARD: 'pixelCard',
  FILL_CARD: 'fillCard',
  IMG_PIXEL_CARD: 'imgPixelCard',
  GRAPHIC_STATE: 'graphicState'
} as const;

export const STORAGE_PATHS = {
  COLOR_CARDS: 'colorCards',
  PIXEL_CARDS: 'pixelCards',
  FILL_CARDS: 'fillCards',
  IMG_PIXEL_CARDS: 'imgPixelCards',
  STATE_IMAGES: 'stateImages',
  USER_AVATARS: 'userAvatars'
} as const; 