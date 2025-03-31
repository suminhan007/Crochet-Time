/**
 * Common type definitions for card components
 */

export interface Color {
  id: number;
  value: string;
}

export interface CardBase {
  id: string;
  img_url: string;
  public?: boolean;
}

export interface ColorCard extends CardBase {
  colors: Color[];
  description: string;
  origin_img_url: string;
}

export interface PixelCard extends CardBase {
  size?: string;
}

export interface FillCard extends CardBase {
  // Additional properties specific to FillCard if any
}

export interface ImgPixelCard extends CardBase {
  // Additional properties specific to ImgPixelCard if any
}

export interface PatternItem extends CardBase {
  description?: string;
  title?: string;
}

export interface MenuDataItem {
  key: string;
  title: string;
  open?: boolean;
  dropData?: {
    key: string;
    title: string;
  }[];
}

/**
 * Props interface for components that show a toast message
 */
export interface ToastProps {
  toast: boolean;
  toastText: string;
  setToast: (show: boolean) => void;
  setToastText: (text: string) => void;
  handleShowToast: (show: boolean, text: string) => void;
} 