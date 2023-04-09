// style
import s from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

const ErrorLayout = (props: Props) => {
  const { children } = props;
  return <div className={s['error-layout-container']}>{children}</div>;
};

export default ErrorLayout;
