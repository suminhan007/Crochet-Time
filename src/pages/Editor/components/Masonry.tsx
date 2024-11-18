import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Masonry: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="grid gap-12"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))" }}
    >
      {children}
    </div>
  );
};

export default Masonry;
