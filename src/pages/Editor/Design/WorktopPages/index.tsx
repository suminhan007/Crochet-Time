import {
  Icon,
  LandDrawer,
  DrawerProps,
  LandDivider,
} from "@suminhan/land-design";

type Props = {
  title?: string;
} & DrawerProps;
const WorktopPages: React.FC<Props> = ({ title, ...restProps }) => {
  return (
    <LandDrawer
      minWidth="100%"
      headerLeftComponent={
        <div className="flex items-center height-100">
          <div className="flex items-center">
            <Icon name="arrow" className="rotate-90" />
            返回
          </div>
          <LandDivider direction="column" lang="40%" margin={24} />
          <div className="fs-16 fw-600">{title}</div>
        </div>
      }
      {...restProps}
    ></LandDrawer>
  );
};

export default WorktopPages;
