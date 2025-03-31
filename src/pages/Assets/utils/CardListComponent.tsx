import React, { useState } from "react";
import {
  Icon,
  LandAlert,
  LandButton,
  LandDialog,
  LandDropdown,
  LandLink,
  LandLoading,
  LandMessage,
  LandPop,
  LandState
} from "@suminhan/land-design";
import { useNavigate } from "react-router-dom";
import { handleDeleteCard, handlePublishCard, handleShowToast } from "../utils/CardUtils";

interface CardItem {
  id: string;
  img_url: string;
  public?: boolean;
  [key: string]: any;
}

interface CardListProps<T extends CardItem> {
  loading: boolean;
  cardData: T[];
  emptyStateText: string;
  createLink: string;
  downloadFolderPath: string;
  tableName: string;
  renderCardInfo?: (item: T) => React.ReactNode;
  publishDialogTitle: string;
  publishDialogContent: string;
  deleteDialogTitle: string;
  deleteDialogContent: string;
  grid?: boolean;
}

function CardListComponent<T extends CardItem>({
  loading,
  cardData,
  emptyStateText,
  createLink,
  downloadFolderPath,
  tableName,
  renderCardInfo,
  publishDialogTitle,
  publishDialogContent,
  deleteDialogTitle,
  deleteDialogContent,
  grid = true
}: CardListProps<T>) {
  const navigate = useNavigate();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showPublishDialog, setShowPublishDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string>();
  const [publishLoading, setPublishLoading] = useState(false);

  // Toast state
  const [toast, setToast] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>("");

  const showToastHandler = (show: boolean, text: string) => {
    handleShowToast(setToast, setToastText, show, text, 1000);
  };

  const handleDownloadCard = async (url: string) => {
    const downloadUrl = url.split('?token=')[0].split(`CroKnitTime/${downloadFolderPath}/`)[1];

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = downloadUrl.split('.png')[0];
      link.click();

      URL.revokeObjectURL(link.href);
    } catch (error) {
      showToastHandler(true, '下载失败，请稍后再试');
    }
  };

  const handleDelete = async () => {
    if (selectedCard) {
      await handleDeleteCard(tableName, selectedCard, showToastHandler, setShowDeleteDialog);
    }
  };

  const handlePublish = async () => {
    if (selectedCard) {
      await handlePublishCard(tableName, selectedCard, setPublishLoading, showToastHandler, setShowPublishDialog);
    }
  };

  if (loading) {
    return (
      <div className={'width-100 flex-1 flex both-center'}>
        <LandLoading />
      </div>
    );
  }

  if (!cardData || cardData.length === 0) {
    return (
      <div className={'width-100 flex-1 flex items-center justify-center'}>
        <LandState
          type={'empty'}
          title={<>
            {emptyStateText}, <LandLink onClick={() => navigate(createLink)}>前往制作</LandLink>
          </>}
        />
      </div>
    );
  }

  return (
    <>
      <div className={`${grid ? 'grid gap-16' : 'flex column gap-16'}`} style={grid ? { gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' } : {}}>
        {cardData.map(item => (
          <div key={item.img_url} className={`relative flex ${grid ? 'column' : ''} items-center gap-12 p-12 border radius-8 border-box`}>
            <div className={'relative hover-pop'}>
              <img src={item.img_url} width={64} alt="" />
              {!grid && <LandPop placement={'bottom'} content={<img src={item.img_url} width={200} alt="" />} />}
            </div>

            <div className={'flex-1 flex gap-4'}>
              {renderCardInfo ? renderCardInfo(item) : null}
            </div>

            <LandDropdown
              toggle={
                <LandButton
                  type={'text'}
                  size={'small'}
                  icon={<Icon name={'more'} className={'rotate-90'} fill={'var(--color-text-3)'} />}
                />
              }
              placement={'center'}
              dropClassName={'shadow-light'}
              dropContent={
                <div className={'flex column items-center justify-end'} style={{ width: '100px' }}>
                  <LandButton
                    type={'text'}
                    width={'100%'}
                    justify={'start'}
                    icon={<Icon name={'download'} />}
                    text={'下载'}
                    onClick={() => handleDownloadCard(item.img_url)}
                  />
                  <LandButton
                    type={'text'}
                    disabled={item.public}
                    width={'100%'}
                    justify={'start'}
                    icon={<Icon name={'next-step'} size={16} strokeWidth={3} />}
                    text={item.public ? '已发布' : '发布'}
                    onClick={() => {
                      setShowPublishDialog(true);
                      setSelectedCard(item.id);
                    }}
                  />
                  <LandButton
                    type={'text'}
                    width={'100%'}
                    justify={'start'}
                    icon={<Icon name={'delete'} size={16} strokeWidth={3} />}
                    text={'删除'}
                    onClick={() => {
                      setShowDeleteDialog(true);
                      setSelectedCard(item.id);
                    }}
                  />
                </div>
              }
            />
          </div>
        ))}
      </div>

      {/* Publish confirmation dialog */}
      <LandDialog
        title={publishDialogTitle}
        show={showPublishDialog}
        onClose={() => setShowPublishDialog(false)}
        onCancel={() => setShowPublishDialog(false)}
        onSubmit={handlePublish}
        submitLabel={publishLoading ? '发布中...' : '发布'}
      >
        <LandAlert title={publishDialogContent} />
      </LandDialog>

      {/* Delete confirmation dialog */}
      <LandDialog
        title={deleteDialogTitle}
        show={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onCancel={() => setShowDeleteDialog(false)}
        onSubmit={handleDelete}
      >
        <LandAlert type={'error'} title={deleteDialogContent} />
      </LandDialog>

      {toast && <LandMessage show={toast} text={toastText} />}
    </>
  );
}

export default CardListComponent; 