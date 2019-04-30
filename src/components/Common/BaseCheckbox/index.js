import React from 'react';
import Checkbox from 'rc-checkbox';
import styles from './index.module.scss';

export default function(props) {
  return (
    <span className={styles['wrap-checkbox']} ><Checkbox {...props} /></span>
  );
}
