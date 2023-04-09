// style
import s from './index.module.scss';

interface Props {
  children: React.ReactNode;
  styleClasses?: string;
}

const HoverBtn = (props: Props) => {
  const { children, styleClasses = '' } = props;

  return <button className={`${s.btn} ${styleClasses}`}>{children}</button>;
};

export default HoverBtn;
