import { useEffect, useState } from 'react';

// plugins
import { CSSTransition } from 'react-transition-group';

// style
import s from './index.module.scss';

interface Props {
  direction: 'horizontal' | 'vertical';
  timeout: number;
  children: React.ReactNode;
  moveDistanceType: 'sm' | 'md' | 'large';
}

const DEFAULT_ENTER_PREFIX_CLASS = 'fade-and-move-enter';

const FadeAndMove = (props: Props) => {
  const { direction = 'horizontal', timeout = 2000, children, moveDistanceType = 'sm' } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const enterClassName = `${DEFAULT_ENTER_PREFIX_CLASS}-${
    direction === 'horizontal' ? 'x' : 'y'
  }-${moveDistanceType}`;

  return (
    <CSSTransition
      in={show}
      timeout={timeout}
      classNames={{
        enter: s[enterClassName],
        enterActive: s['fade-and-move-enter-active'],
      }}
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default FadeAndMove;
