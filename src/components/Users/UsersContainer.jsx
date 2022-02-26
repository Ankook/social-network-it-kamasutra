import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers} from '../../redux/users-reducers';
import Users from './Users.jsx';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers, getUsersSelector, getUsersSuperSelector, getСurrentPage } from '../../redux/users-selectors';
class UsersContainer extends React.Component  {
  
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize); //поменяли getUsers на requestUsers, так как поменялось название thunk-creator
  }

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize) //поменяли getUsers на requestUsers, так как поменялось название thunk-creator
  }


  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      toggleFollowingProgress={this.props.toggleFollowingProgress}
      followingInProgress={this.props.followingInProgress}  
      />
    </>
  }
}


let mapStateToProps = (state) => {
  console.log('state');
  console.log(state);
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    //totalUsersCount: state.usersPage.totalUsersCount,
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getСurrentPage(state),
    //isFetching: state.usersPage.isFetching,
    isFetching: getIsFetching(state),
    //followingInProgress: state.usersPage.followingInProgress
    followingInProgress: getFollowingInProgress(state)
  }
}



let withRedirect = withAuthRedirect(UsersContainer);

{/*export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers
  }
)(withRedirect);
*/}
export default compose(
  //withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
    }
  )
)(UsersContainer);