import React, { ReactNode } from 'react';
import text from '../../assets/lianchengjue_jinyong.txt';
import styles from './index.less';

export default function LoaderDemo(): ReactNode {
  return <div className={styles.box}>{text}</div>;
}
