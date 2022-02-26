import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from "../../redux/profile-reducer";
import { compose } from 'redux';
import { getStatus, updateStatus } from '../../redux/profile-reducer';



class ProfileContainer extends React.Component  {
  componentDidMount() {
    console.log("Пропсы компоненты ProfileContainer")
    console.log(this.props);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
    
  render() {
    {/*console.log("RENDER PROFILE");*/}
      return (
        <div>
          <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
      )
    }
}

let mapStateToProps = (state) => {
  {/*console.log("mapStateToProps PROFILE")*/}
  return({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.authPage.userId,
    isAuth: state.authPage.isAuth
  })
  
};

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus }),
  withRouter
  //withAuthRedirect
)(ProfileContainer);





