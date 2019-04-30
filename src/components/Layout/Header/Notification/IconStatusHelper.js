import React from 'react';
import {
  faFileAlt, faFileEdit, faFileCheck, faFileTimes, faInfoCircle
} from '@fortawesome/fontawesome-pro-solid';
import TooltipComponent from 'src/components/Common/TooltipComponent';

const showNotifyReportIconStatus = status => {
  const statusObj = {};
  switch (status) {
    case 'REPORT_PENDING':
      statusObj.class = 'danger-color';
      statusObj.title = 'Pending';
      statusObj.icon = faInfoCircle;
      break;
    case 'REPORT_READY':
      statusObj.class = 'link-color';
      statusObj.title = 'Ready for Review';
      statusObj.icon = faFileAlt;
      break;
    case 'REANALYSIS_REQUESTED':
      statusObj.class = 'link-color';
      statusObj.title = 'Reanalyzed';
      statusObj.icon = faFileEdit;
      break;
    case 'REPORT_APPROVED':
      statusObj.class = 'green-color';
      statusObj.title = 'Accepted';
      statusObj.icon = faFileCheck;
      break;
    case 'REPORT_REJECTED':
      statusObj.class = 'danger-color';
      statusObj.title = 'Rejected';
      statusObj.icon = faFileTimes;
      break;
  }
  const reportTooltip = {
    message: statusObj.title,
    iconClass: statusObj.class,
    icon: statusObj.icon
  };
  return (
    <TooltipComponent {...reportTooltip} />
  );
};

export default {
  showNotifyReportIconStatus
};
