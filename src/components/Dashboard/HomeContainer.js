import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = state => {
  return state.userList;
};

export default connect(
  mapStateToProps
)(Home);
