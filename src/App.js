import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { HashRouter, Route } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { logout } from "./redux/auth-reducer";
import { getAuthUserData } from "./redux/auth-reducer";
import { initializeApp } from "./redux/app-reducer";
import  Preloader  from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Suspense } from "react";

//const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
//const ProfileContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (

      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users"><UsersContainer /></Route>
          <Route path="/news"><News /></Route>
          <Route path="/settings"><Settings /></Route>
          <Route path="/friends"><Friends /></Route>
          <Route path="/login" render={() => <Login />} />
          </Suspense>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.appPage.initialized
})


//export default compose(
  let AppContainer = compose(
  withRouter,
    connect(mapStateToProps, { initializeApp }))(App);
  
const SamuraiJSApp = (props) => {
  return <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
}
  
export default SamuraiJSApp;

{/* export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

*/}
