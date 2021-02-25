import React from "react";

// Parent안의 컴포넌트를 보여주고 싶으면 children을 사용한다.
function Parent({ children }) {
  const style = {
    border: "2px solid black",
    padding: 16,
  };
  return <div style={style}>{children}</div>;
}

export default Parent;
