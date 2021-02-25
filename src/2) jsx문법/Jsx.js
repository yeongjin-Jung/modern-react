import React from "react";

function Jsx() {
  const name = "react";
  // sytle 객체를 선언해서 css 조절
  const style = {
    backgroundColor: "balck",
  };
  return (
    //  jsx 는 class가 아니고 className을 사용한다
    <div className="main">
      <div style={style}>{name}</div>
    </div>
  );
}

export default Jsx;
