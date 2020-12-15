import React from "react";

const Main = (props) => {
  console.log("props", props);
  return (
    <div>
      <h1>Dashboard Tabs</h1>
      <button
        onClick={() => {
          props.history.push("/about");
        }}
      >
        Go to About Tabs
      </button>
    </div>
  );
};

export default Main;
