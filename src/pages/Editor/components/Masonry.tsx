import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { CommonProps, LandLoading, LandState } from "@suminhan/land-design";
import { useDebounce } from "../../../utils/useDebounce";

/**
 * 瀑布流组件
 * 外部暂未使用
 */
type MasonryOptions = {
  /** 列数 */
  column?: number;
  /**
   *  固定每一项的宽度
   *  itemMinWidth 和 itemMaxWidth 将失效
   */
  itemWidth?: number;
  /** 每一项的最小宽度 */
  itemMinWidth?: number;
  /** 每一项的最大宽度 */
  itemMaxWidth?: number;
  /** 间距 */
  gap?: number;
  /** 纵向间距 */
  colGap?: number;
};
export type MasonryProps = {
  children?: ReactNode;
  /** 配置项 */
  options?: MasonryOptions;
  /** 空态 */
  isEmpty?: boolean;
  /** 自定义空态 */
  emptyComponents?: string | React.ReactNode;
  /** 是否加载完成 */
  isEnd?: boolean;
  /** 加载完成文案 */
  endText?: string;
  /** 触发距离 */
  nextDistance?: number;
  /** 加载下一个 */
  onNext?: () => void;
  /** 后缀容器 */
  suffixBoxOptions?: {
    top?: number;
    bottom?: number;
  };
} & CommonProps;

const DEFAULT_OPTIONS: MasonryOptions = {
  gap: 0,
  itemMinWidth: 300,
  itemMaxWidth: 400,
  colGap: 0,
};
const Masonry: React.FC<MasonryProps> = ({
  className = "",
  style,
  options = DEFAULT_OPTIONS,
  isEmpty = false,
  emptyComponents = "AI 创作",
  isEnd = false,
  endText = "没有更多了",
  onNext,
  children,
  // suffixBoxOptions,
  // nextDistance = 1200,
}) => {
  const child = useMemo(
    () => (children instanceof Array ? children : [children]),
    [children]
  );
  // const suffixBoxOptionsMemo = useMemo(() => ({ ...NEXT_BOX_OPTIONS, ...suffixBoxOptions }), [suffixBoxOptions]);
  const {
    gap = 0,
    colGap,
    itemWidth,
    itemMinWidth = 260,
    itemMaxWidth = 1000,
    column,
  } = options;

  const { currentItemMinWidth, currentItemMaxWidth } = useMemo(() => {
    if (itemWidth) {
      return {
        currentItemMaxWidth: itemWidth,
        currentItemMinWidth: itemWidth,
      };
    }
    return {
      currentItemMaxWidth: itemMaxWidth,
      currentItemMinWidth: itemMinWidth,
    };
  }, [itemWidth, itemMaxWidth, itemMinWidth]);

  /** 监听容器宽度变化 自适应 */
  const { containerRef, col } = useMasonryResize({
    currentItemMinWidth,
    isEmpty,
    gap,
    column,
  });

  // 监听 next
  const { nextRef } = useMasonryNext({ isEmpty, child, isEnd, onNext });

  const colChilds = useMemo(() => {
    const colHeightArray = Array.from({ length: col }).map(() => 0); // 每一列的高度集合
    const colArray: any = Array.from({ length: col }).map(() => []); // 遍历后的元素

    child.forEach((item) => {
      // 遍历判断每个元素存放在哪一列
      let ratio = item?.props?.ratio;
      if (typeof ratio === "string") {
        // eslint-disable-next-line
        try {
          ratio = eval(ratio.replace(":", "/"));
        } catch {
          ratio = "1 / 1";
        }
      }
      const minHeight = Math.min(...colHeightArray);
      const currentMinIdx = colHeightArray.findIndex((i) => i === minHeight);
      colHeightArray[currentMinIdx] =
        colHeightArray[currentMinIdx] + 1 / (ratio ?? 1);
      colArray[currentMinIdx]?.push?.(item);
    });
    return colArray;
  }, [child, col]);

  return (
    <div
      className={`relative items-center flex-1 column ${
        isEmpty || !children ? "flex justify-center" : ""
      } ${className ? className : ""}`}
      style={{
        ...style,
        // paddingBottom: !isEmpty ? suffixBoxOptionsMemo.top + SUFFIX_HEIGHT + suffixBoxOptionsMemo.bottom : 0,
      }}
      ref={containerRef}
    >
      {isEmpty ? (
        typeof emptyComponents === "string" ? (
          <LandState type="empty" title="暂无内容" />
        ) : (
          emptyComponents
        )
      ) : (
        col > 1 && (
          <div className="flex" style={{ gap }}>
            {Array.from({ length: col }).map((_i, idx) =>
              React.createElement("div", {
                className: "flex",
                style: {
                  gap: colGap ? colGap : gap,
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  flexDirection: "column",
                  width: `calc(${100 / col}% - ${((col - 1) * gap) / col}px)`,
                  minWidth: currentItemMinWidth,
                  maxWidth: currentItemMaxWidth,
                },
                key: idx,
                children: colChilds[idx],
              })
            )}
          </div>
        )
      )}
      {!isEmpty &&
        (!isEnd ? (
          // <NextBox style={{ height: nextDistance, bottom: suffixBoxOptionsMemo.bottom }} ref={nextRef}>
          <NextBox
            className="flex width-100 items-center justify-center flex-1"
            style={{
              minHeight: "200px",
            }}
            ref={nextRef}
          >
            <LandLoading />
          </NextBox>
        ) : (
          <div
            className="color-gray-3 flex items-center justify-center width-100"
            style={{
              paddingTop: "80px",
              paddingBottom: "56px",
            }}
            // style={{ bottom: 6 + suffixBoxOptionsMemo.bottom, height: SUFFIX_HEIGHT }}
          >
            {endText}
          </div>
        ))}
    </div>
  );
};

const NextBox = styled.div`
  /* position: absolute; */
  /* bottom: 0; */
  /* left: 0 !important; */
  /* z-index: 1 !important; */
  /* display: flex; */
  /* align-items: end; */
  /* justify-content: center; */
  /* width: 100%; */
`;
/** 监听 next */
const useMasonryNext = ({
  isEmpty,
  isEnd,
  child,
  onNext,
}: {
  isEmpty: boolean;
  child: any;
  isEnd: boolean;
  onNext?: () => void;
}) => {
  /** 监听 next */
  const nextRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!nextRef.current || isEmpty) return;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((item) => {
          item.isIntersecting && onNext?.();
        });
      },
      {
        root: document,
        threshold: [0],
      }
    );
    intersectionObserver.observe(nextRef.current);
    return () => intersectionObserver.disconnect();
  }, [isEmpty, child, isEnd, onNext]);

  return { nextRef };
};

/** 自适应 */
const useMasonryResize = ({
  isEmpty,
  currentItemMinWidth,
  gap,
  column,
}: {
  isEmpty: boolean;
  currentItemMinWidth: number;
  gap: number;
  column?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [newCol, setNewCol] = useState<number>(1); // 计算后当前容器最大能装多少列
  const col = useMemo(() => (column ? column : newCol), [column, newCol]); // 最终使用多少列

  const handleChangeCol = useDebounce(
    (col: number) => {
      setNewCol(col);
    },
    200,
    []
  );
  useEffect(() => {
    if (!containerRef.current || isEmpty) return;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((item) => {
        // console.log(item.contentRect.width, currentItemMinWidth, col);

        handleChangeCol(
          Math.floor(item.contentRect.width / (currentItemMinWidth + gap))
        ); // 设置当前最多存放列
      });
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [currentItemMinWidth, gap, isEmpty, col]);

  return {
    containerRef,
    /** 当前列数 */
    col,
  };
};

export default Masonry;
