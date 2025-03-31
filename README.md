# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Reusable Components and Utilities

This directory contains reusable components and utilities extracted from the Assets module to facilitate code reuse across the application.

## Files Overview

### 1. `CardUtils.ts`
Contains utility functions for card operations:
- `handleShowToast`: Shows a toast message with automatic timeout
- `handleDownloadFile`: Downloads a file from Supabase storage
- `handlePublishCard`: Publishes a card to the community
- `handleDeleteCard`: Deletes a card from the database

### 2. `FetchUtils.ts`
Contains utility functions for fetching data from Supabase:
- `fetchColorCardData`: Fetches color card data
- `fetchPixelCardData`: Fetches pixel card data
- `fetchFillCardData`: Fetches fill card data
- `fetchImgPixelCardData`: Fetches image pixel card data

### 3. `CardListComponent.tsx`
A reusable component for displaying any type of card list. Features:
- Loading state
- Empty state with navigation
- Card listing with image preview
- Actions dropdown (download, publish, delete)
- Confirmation dialogs
- Toast messages

### 4. `types.ts`
Common TypeScript interfaces used across components:
- `Color`: Color interface
- `CardBase`: Base interface for all card types
- `ColorCard`: Interface for color cards
- `PixelCard`: Interface for pixel cards
- `FillCard`: Interface for fill cards
- `ImgPixelCard`: Interface for image pixel cards
- `PatternItem`: Interface for pattern items
- `MenuDataItem`: Interface for menu items
- `ToastProps`: Props for toast message handling

## Usage Examples

### Using CardListComponent

```tsx
import React, { useState, useEffect } from 'react';
import CardListComponent from './CardListComponent';
import { fetchColorCardData } from './FetchUtils';
import { ColorCard } from './types';

const ColorCardListPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [colorData, setColorData] = useState<ColorCard[]>([]);

  useEffect(() => {
    fetchColorCardData(setColorData, setLoading);
  }, []);

  const renderCardInfo = (item: ColorCard) => (
    <>
      {item.colors?.map((color) => (
        <div key={color.id} className={'flex-1 flex column gap-8'}>
          <div style={{
            height: '8px',
            backgroundColor: color.value
          }}></div>
          <div className={'fs-12 color-gray-4'}>{color.value}</div>
        </div>
      ))}
    </>
  );

  return (
    <CardListComponent
      loading={loading}
      cardData={colorData}
      emptyStateText="暂无色卡"
      createLink="/type=tools-colorPicker"
      downloadFolderPath="colorCards"
      tableName="colorCard"
      renderCardInfo={renderCardInfo}
      publishDialogTitle="确认发布该色卡到社区？"
      publishDialogContent="色卡发布到社区后将成为公开色卡，允许所有人查看、下载，发布后不可撤回。"
      deleteDialogTitle="确认删除该色卡？"
      deleteDialogContent="删除后不可恢复，已发布色卡也会随之删除，请谨慎操作！"
    />
  );
};

export default ColorCardListPage;
```
