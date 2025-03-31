import React, { useEffect, useMemo, useState } from "react";
import { Icon, LandMessage } from "@suminhan/land-design";
import CommunityColorCard from "./CommunityColorCard";
import StateUploadDrawerContent from "./CommunityStateCard/StateUploadDrawerContent.tsx";
import CommunityStateCard from "./CommunityStateCard";
import CommunityPixelCard from "./CommunityPixelCard";
import CommunityFillCard from "./CommunityFillCard";
import CommunityInspirationCard from "./CommunityInspirationCard";
import CommunityCKTCard from "./CommunityCKTCard";
import CommunityImgPixelCard from "./CommunityImgPixelCard";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CommunityProps } from "./types";
import { menuData, enMenuData } from "./constants";
import { handleShowToast, handleStatePublish } from "./utils";

const Community: React.FC<CommunityProps> = ({
  isEnglish,
  user
}) => {
  const navigate = useNavigate();
  const newMenuData = useMemo(() => isEnglish ? enMenuData : menuData, [isEnglish]);
  const [curTab, setCurTab] = useState('state');
  const [showCreateStateDrawer, setShowCreateStateDrawer] = useState(false);
  const [showCreateOfficialStateDrawer, setShowCreateOfficialStateDrawer] = useState(false);
  const [toast, setToast] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>("");
  const [firstIn, setFirstIn] = useState(true);

  useEffect(() => {
    if (!window.location.href.includes('communityType=')) return;
    const href = window.location.href.split('communityType=')[1];
    if (href?.length >= 2) {
      setCurTab(href);
    }
  }, [window.location.href]);

  const handleShowToastMessage = (show: boolean, text: string) => {
    handleShowToast(setToast, setToastText, show, text);
  };

  const handleStatePublishWrapper = async (url: string, title?: string, desc?: string) => {
    await handleStatePublish(url, title, desc, handleShowToastMessage, setShowCreateStateDrawer);
  };

  const handleOfficialStatePublishWrapper = async (url: string, title?: string, desc?: string) => {
    await handleStatePublish(url, title, desc, handleShowToastMessage, setShowCreateOfficialStateDrawer);
  };

  return (<>
    <div className={'flex width-100 height-100 bg-gray'}>
      <StyledCommunityMenu className={'height-100 flex column pb-16 px-24 no-wrap'} style={{ width: 'fit-content' }}>
        {newMenuData?.map((item: any, index: number) => <div key={item.key ?? index}
          className={`flex column gap-8 py-8 fs-14 cursor-pointer ${curTab === item.key ? 'fw-600 color-gray-2' : ' color-gray-3'}`}
          onClick={() => {
            if (item.dropData) {
              navigate(`?communityType=${item.dropData[0].key}`)
              setCurTab(item.dropData[0].key)
            } else {
              navigate(`?communityType=${item.key}`)
              setCurTab(item.key)
            }
            if (item.key === 'inspiration') setFirstIn(false)
          }}>
          <div className={'flex items-center gap-8'}>
            {item.title}
            {item.key === 'ckt' && <div className={'flex items-center gap-4 px-4 radius-4 color-gray-4 fw-400 fs-12 bg-gray'}>{isEnglish ? 'store' : '商店'}
              {user?.id === '82758977-37d6-4917-9220-fe25e3064e08' &&
                <div onClick={() => setShowCreateOfficialStateDrawer(true)} className={'p-2 bg-dark color-white radius-4 flex both-center'} ><Icon name={'add'} size={14}
                  strokeWidth={4} /></div>}
            </div>}
            {item.key === 'state' &&
              <div onClick={() => setShowCreateStateDrawer(true)} className={'p-2 bg-dark color-white radius-4 flex both-center'}><Icon name={'add'} size={14} strokeWidth={4} /></div>
            }
          </div>
          {item.dropData && <div className={'ml-16'}>{item.dropData?.map((itm: { key: string, title: string }) => <div
            key={itm.key}
            className={`py-8 ${curTab === itm.key ? 'fw-600 color-gray-2' : ' color-gray-3'}`}
            onClick={(e) => {
              setCurTab(itm.key);
              e.stopPropagation()
            }}
          >{itm.title}</div>)}</div>}
        </div>)}
      </StyledCommunityMenu>
      <div className={'flex-1 width-1 height-100 pr-16 pb-16'}>
        <div className={'width-100 height-100 bg-white radius-12'}>
          {curTab === 'ckt' && <CommunityCKTCard />}
          {curTab === 'state' && <CommunityStateCard isEnglish={isEnglish} />}
          {curTab === 'inspiration' && <CommunityInspirationCard isEnglish={isEnglish} firstIn={firstIn} />}
          {curTab === 'colorCard' && <CommunityColorCard />}
          {curTab === 'fillCard' && <CommunityFillCard />}
          {curTab === 'pixelCard' && <CommunityPixelCard />}
          {curTab === 'imgPixelCard' && <CommunityImgPixelCard />}
        </div>
      </div>
    </div>
    <StateUploadDrawerContent
      isEnglish={isEnglish}
      show={showCreateStateDrawer}
      onClose={() => setShowCreateStateDrawer(false)}
      onCancel={() => setShowCreateStateDrawer(false)}
      onPublish={handleStatePublishWrapper}
    />
    <StateUploadDrawerContent
      isEnglish={isEnglish}
      show={showCreateOfficialStateDrawer}
      onClose={() => setShowCreateOfficialStateDrawer(false)}
      onCancel={() => setShowCreateOfficialStateDrawer(false)}
      onPublish={handleOfficialStatePublishWrapper}
    />
    {toast && <LandMessage show={toast} text={toastText} />}
  </>)
}
const StyledCommunityMenu = styled.div`
    @media screen and (max-width: 767px) {
        padding-inline: 12px;
    }
`
export default Community;
