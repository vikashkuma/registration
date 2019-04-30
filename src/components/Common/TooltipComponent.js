import React, { Fragment } from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/fontawesome-pro-light';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const TooltipComponent = props => {
  const {
    message,
    iconShow = true,
    label,
    labelValue,
    iconClass = 'sky-color ml-1 pointer align-middle font-size-16',
    icon = faInfoCircle
  } = props;

  const pClassiIconTooltip = (
    <Tooltip id="tooltip">
      {message}
    </Tooltip>
  );

  return (
    <Fragment>
      {iconShow ?
        <OverlayTrigger placement="top" overlay={pClassiIconTooltip}>
          <FontAwesome icon={icon} className={iconClass} />
        </OverlayTrigger>
        :
        <OverlayTrigger placement="top" overlay={pClassiIconTooltip}>
          <div>
            <span className="slate-grey-color">{label}&nbsp;</span>
            <span>{labelValue}</span>
          </div>
        </OverlayTrigger>
      }
    </Fragment>
  );
};

export default TooltipComponent;
