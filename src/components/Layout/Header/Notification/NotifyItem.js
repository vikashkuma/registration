import React, { Fragment } from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-pro-light';
import moment from 'moment';
import IconStatusHelper from './IconStatusHelper';
class NotifyItem extends React.Component {
  render() {
    const { type, id, link = {}, dateCreated, deleteNotifyItem, subject, body, followLink } = this.props;
    const fromNow = moment(dateCreated).fromNow(true);
    return (
      <Fragment>
        <tr className="pointer">
          <td className="wd-3-em" onClick={() => followLink(link, id)}>
            <span className="bg-icon-circle">
              {IconStatusHelper.showNotifyReportIconStatus(type, id)}
            </span>
          </td>
          <td className="wd-8-em" onClick={() => followLink(link, id)}><strong>{subject}</strong></td>
          <td className="wd-12-em" onClick={() => followLink(link, id)}><strong>{body}</strong></td>
          <td className="wd-4-em">
            <div className="duration font-size-12 slate-grey-color">
              <span>{fromNow}</span>
            </div>
          </td>
          <td align="right">
            <span onClick={() => deleteNotifyItem(id)}>
              <FontAwesome icon={faTimes} className="close-btn navi-blue-color pointer" />
            </span>
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default NotifyItem;
