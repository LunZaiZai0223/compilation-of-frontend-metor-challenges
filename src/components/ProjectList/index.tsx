import { Fragment } from 'react';

// style
import s from './index.module.scss';

// components
import ProjectItem from '../ProjectItem';
import FadeAndMove from '../../UI/FadeAndMove';

// constants
import PROJECT_LIST from '../../constants/project-list.constant';

const ProjectList = () => {
  return (
    <FadeAndMove direction={'vertical'} timeout={2000} moveDistanceType={'sm'}>
      <ul className={s['project-list']}>
        {PROJECT_LIST.map((project) => {
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
