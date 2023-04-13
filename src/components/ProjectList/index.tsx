import { Fragment } from 'react';

// style
import s from './index.module.scss';

// components
import ProjectItem from '../ProjectItem';
import FadeAndMove from '../../UI/FadeAndMove';

// interface
import { Project } from '../../constants/project-list.constant';

interface Props {
  projectList: Project[];
}

const ProjectList = (props: Props) => {
  const { projectList } = props;
  return (
    <FadeAndMove direction={'vertical'} timeout={2000} moveDistanceType={'sm'}>
      <ul className={s['project-list']}>
        {projectList.map((project) => {
          return (
            <Fragment key={project.id}>
              <ProjectItem {...project} />
            </Fragment>
          );
        })}
      </ul>
    </FadeAndMove>
  );
};

export default ProjectList;
