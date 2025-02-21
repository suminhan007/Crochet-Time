import React, {useCallback, useState} from "react";
import {
  Icon,
  LandAffixContainer,
  LandColorPicker,
  LandDivider,
  LandFlex,
  LandInput,
  LandTitle
} from "@suminhan/land-design";

type WireColorType = {
  color:string,
  name: string,
  img_url: string,
}
type Props = {
  isEnglish?: boolean;
}
const WorktopWool: React.FC<Props> = ({
                                        isEnglish
                                      }) => {
  const [colors,setColors] = useState<WireColorType[]>([]);
  const [showNameInput, setShowNameInput] = useState<string>('');
  const handleColoeDelete = useCallback((color:string) => {
    const newData = colors.filter(i => i.color !== color);
    setColors(newData);
  },[colors])
  return <div className="relative flex p-24 width-100 height-100 bg-gray">
    <div className={'flex width-100 bg-white radius-12'}>
      <div className={'flex-1 flex column gap-24 p-24'}>
        <LandFlex column gap={8}>
          <LandTitle type={'h3'} title={isEnglish?'Name':'名称'}/>
          <LandInput type={'background'}/>
        </LandFlex>
        <LandFlex column gap={8}>
          <LandTitle type={'h3'} title={isEnglish ? 'Colors' : '颜色'}/>
          <div className={'grid gap-12 width-100'} style={{gridTemplateColumns: 'repeat(auto-fill,minmax(48px,1fr))'}}>
            {colors?.map((colorItem, colorIndex) => <div key={colorItem.color ?? colorIndex}
                                                         className={'flex column items-center fs-12 color-gray-4'}>
              <LandAffixContainer
                  className={'width-100 px-8'}
                  rtOption={{
                    content: <Icon name={'error-fill'} fill={'var(--color-red-6)'} className={'cursor-pointer'}/>,
                    custom:true,
                    style: {top: 0,right:0},
                    hoverShow:true,
                    onClick: () => handleColoeDelete?.(colorItem.color)
                  }}
              >
                <LandColorPicker
                    size={'100%'}
                    className={'radius-50 inline-block'}
                    style={{aspectRatio: '1'}}
                    value={colorItem.color}
                    onChange={val => {
                      const newColors = colors.map(i => i.color === colorItem.color ? Object.assign(i, {color: val}) : i);
                      setColors(newColors);
                    }}/>
              </LandAffixContainer>
              <div className={'relative width-100'}>
                <div className={'flex both-center width-100 fs-12 color-gray-3'} style={{height: '36px'}}
                     onClick={() => setShowNameInput(colorItem.color)}>{colorItem.name}</div>
                <div
                    className={`absolute top-0 left-0 bg-white ${showNameInput === colorItem.color ? '' : 'opacity-0 events-none'}`}>
                  <LandInput
                      autofocus
                      width={'100%'}
                      type={'transparent'}
                      value={colorItem.name}
                      style={{fontSize: '12px', color: 'var(--color-text-3)'}}
                      onBlur={() => setShowNameInput('')}
                      onChange={val => {
                        const newColors = colors.map(i => i.color === colorItem.color ? Object.assign(i, {name: val}) : i);
                        setColors(newColors);
                      }}/>
                </div>
              </div>
            </div>)}
          </div>
          <label className={'relative flex both-center width-100 py-8 radius-8 border cursor-pointer'}>
            <Icon name={'add'} size={16} style={{zIndex: 1}}/>
            <input type={'color'} className={'absolute bottom-0 left-0 radius-50'}
                   style={{width: '0px', height: '0px', border: 'none'}} onChange={e => {
              const existColors = colors.map(i => i.color);
              if (existColors.length > 0 && existColors?.includes(e.target.value)) return;
              setColors([...colors, {color: e.target.value, name: e.target.value, img_url: ''}])
            }}/>
          </label>
        </LandFlex>
        <LandFlex column gap={8}>
          <LandTitle type={'h3'} title={isEnglish?'Name':'名称'}/>
          <LandInput type={'background'}/>
        </LandFlex>
      </div>
      <LandDivider direction="column"/>
      <div className={'flex-1'}></div>
    </div>
  </div>;
};

export default WorktopWool;
