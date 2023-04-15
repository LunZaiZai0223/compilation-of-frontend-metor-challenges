import { useState } from 'react';

// style
import styles from './index.module.scss';

interface Props {
  children?: React.ReactNode | string;
  content?: React.ReactNode | string;
}

const Tooltip = (props: Props) => {
  const { children, content } = props;
  const [contentIsVisible, setContentIsVisible] = useState(false);

  return (
    <div
      className={styles['tool-tip-container']}
      onMouseEnter={() => setContentIsVisible(true)}
      onMouseLeave={() => setContentIsVisible(false)}
    >
      {children}
      {contentIsVisible && <div className={styles['tool-tip-content-wrapper']}>{content}</div>}
    </div>
  );
};

export default Tooltip;
