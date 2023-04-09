// style
import s from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

const ProjectsPageLayout = (props: Props) => {
  const { children } = props;
  return <div className={s['projects-layout']}>{children}</div>;
};

export default ProjectsPageLayout;
