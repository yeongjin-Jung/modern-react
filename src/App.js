import React from "react";

import Hello from "./1) react- begin/Hello";
import Jsx from "./2) jsx문법/Jsx";
import Parent from "./3) props로 값전달/Parent";
import Props from "./3) props로 값전달/Props";
function App() {
  return (
    <div className="App">
      <Hello></Hello> {/* 1) react- begin */}
      <Jsx></Jsx> {/* 2) jsx문법 */}
      <Props name="react" color="red"></Props> {/* 3) props로 값전달 */}
      <Parent>
        <Hello></Hello> {/* 1) react- begin */}
        <Jsx></Jsx> {/* 2) jsx문법 */}
      </Parent>
    </div>
  );
}

export default App;
