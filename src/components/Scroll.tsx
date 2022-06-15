import React from "react";

type ScrollProps = {
  children: React.ReactNode;
};

const Scroll = (props: ScrollProps) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "600px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
