import React from "react";

function Props(props) {
  console.log(props);
  // 비구조 할당
  // props => name, color로 바꿀수 있다
  // ex) function Props(props) {   => function Props({name, color}) {
  return (
    <div className="main" style={{ color: props.color }}>
      {props.name}
    </div>
  );
}

// 만약 props가 없을 경우 defaultProps를 정의할 수 있다.
Props.defaultProps = {
  name: "안녕",
  color: "yellow",
};

export default Props;
