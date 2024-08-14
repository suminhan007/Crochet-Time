import { LandFlex, LandTitle } from "@suminhan/land-design";
import React from "react";

type Props = {
  mainTitle?: string | React.ReactNode;
  mainInfo?: string;
  subTitle?: string | React.ReactNode;
};
export const PageTitle: React.FC<Props> = ({
  mainTitle,
  mainInfo,
  subTitle,
}) => {
  return (
    <LandFlex column gap={8}>
      <LandTitle title={mainTitle} type="h3" info={mainInfo} />
      <LandTitle title={subTitle} type="p" className="color-gray-4" />
    </LandFlex>
  );
};
