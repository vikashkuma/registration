import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-pro-light';
import { Table } from 'react-bootstrap';
import NotifyItem from './NotifyItem';
import { fetchNotifyData } from 'src/store/actions/home-actions';
import { updateNotification } from 'src/services/dashboard';

class NotificationsPage extends Component {
  componentDidMount() {
    fetchNotifyData();
  }

  deleteNotifyItem = async notificationId => {
    const resp = await updateNotification(notificationId);
    if (resp.status === 204) {
      fetchNotifyData();
    }
  }

  followLink = link => {
    this.props.notifyCloseHandler();
    const { target, reportId } = link;
    let url = 'dashboard';// FIXME based on target navigate to target page
    if (target === 'report') {
      url = `/reports/${reportId}/full-text-report`;
    }
    this.props.history.push(url);
  };

  render() {
    const { notificationArray, notifyCloseHandler, show } = this.props;
    return (
      <Fragment>
        {show && <div className="notify-wrap rounded">
          <div className="notify-hdr clearfix">
            <div><h4 className="float-left font-size-30">Notifications</h4></div>
            <div className="float-right">
              <div className="hpd-close-btn pointer" onClick={notifyCloseHandler}>
                <FontAwesome icon={faTimes} className="close-icon navi-blue-color" />
              </div>
            </div>
          </div>
          {
            notificationArray.length ?
              <Fragment>
                <div className="bg-slate-light-grey text-center text-white">Most Recent</div>
                <div className="table-wrap" id="scroll-bar">
                  <Table responsive>
                    <tbody>
                      {
                        notificationArray.map((data, index) => {
                          return (
                            <NotifyItem
                              {...data}
                              deleteNotifyItem={this.deleteNotifyItem}
                              key={index}
                              notifyCloseHandler={notifyCloseHandler}
                              followLink={this.followLink}
                            />
                          );
                        })
                      }
                    </tbody>
                  </Table>
                </div>
              </Fragment>
              :
              <div className="bg-slate-light-grey text-center text-white">No Recent Notification</div>
          }
        </div>
        }
      </Fragment>
    );
  }
}


export default withRouter(NotificationsPage);
