import React, { Component } from "react";
import Navbar from "./views/Navbar";
import "./App.css";
import { Scrollbars } from "react-custom-scrollbars";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Profile from "./views/Profile";
import PostList from "./components/PostList";
import SignIn from "./views/SignIn";
import { connect } from "react-redux";
import { userSessionRestore } from "./redux/action";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const userId = localStorage.getItem("userId");
    if (userId !== null && userId !== undefined) {
      console.log(this.props);
      this.props.userSessionRestore(userId);
    } else {
      this.props.history.push("/signin");
    }
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route path="/signin" component={SignIn} />
          
          <Route exact path="/" component={PostList} />
          <Route path="/profile" component={Profile} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

// function mapStateToProps({ users }) {
//   return {
//     userInfo: users.userInfo
//   }
// }

// function mapDispatchToProps(){
//   return {
//     getUserInfo
// }
// }
const mapDispatchToProps = {
  userSessionRestore
};

export default connect(
  null,
  mapDispatchToProps
)(App);
