import { LandFlex, LandTitle } from "@suminhan/land-design";
import React from "react";

type Props = {
  mainTitle?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
};
export const PageTitle: React.FC<Props> = ({ mainTitle, subTitle }) => {
  return (
    <LandFlex column gap={8}>
      <LandTitle title={mainTitle} type="h3" />
      <LandTitle title={subTitle} type="p" className="color-gray-4" />
    </LandFlex>
  );
};
