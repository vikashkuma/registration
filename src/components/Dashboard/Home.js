import React, { Component } from 'react';
import classnames from 'classnames';
import { Container, Row } from 'react-bootstrap';
import styles from './Home.module.scss';
import { fetchUserList } from 'src/store/actions/user-action';

class Home extends Component {
  componentDidMount() {
    fetchUserList();
  }
  render() {
    const { userList = {} } = this.props;
    const { users } = userList;
    console.log(userList);
    return (
      <Container className={classnames('container-fluid', styles['wrap-home'])}>
        <div>
          {
            users &&
            users.map((user, index) => {
              return (
                <Row>
                  <div>id: <span className="m-1"> {user.id}, </span></div>
                  <div>name: <span className="m-1"> {user.name}, </span></div><br></br>
                  <div>age: <span className="m-1"> {user.age}, </span></div><br></br>
                  <div>gender: <span className="m-1"> {user.gender}, </span></div><br></br>
                  <div>email: <span className="m-1"> {user.email}, </span></div><br></br>
                  <div>phoneNo: <span className="m-1"> {user.phoneNo} </span></div><br></br>
                </Row>
              )
            })
          }
        </div>
      </Container>
    );
  }
}

export default Home;
