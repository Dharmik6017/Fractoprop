import React from "react";
import { getuserdata } from "../../Actions/auhAction";
import { connect } from "react-redux";

const Main = (props) => {
  console.log("Props", props);
  return (
    <div>
      <h1>About Tabs</h1>
      <button
        onClick={() => {
          props.history.push("/");
          props.getuserdata();
        }}
      >
        Go to About Tabs
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { getuserdata })(Main);
