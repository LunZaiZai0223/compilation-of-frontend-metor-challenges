import { useTranslation } from 'react-i18next';

// plugins
import { GoMarkGithub } from 'react-icons/go';
import { BsArrowRight } from 'react-icons/bs';

// components
import HoverBtn from '../../UI/HoverBtn';
import Card from '../../UI/Card';

// interfaces
import { Project } from '../../constants/project-list.constant';

// style
import s from './index.module.scss';

const ProjectItem = (props: Project) => {
  const { name, repositoryLink, demoLink, description, projectPreviewImgPath } = props;
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <li className={s['project-item']}>
      <Card>
        <div className={s['preview-img-wrapper']}>
          <img src={projectPreviewImgPath} alt='project preview' />
        </div>
        <div className={s['project-content-wrapper']}>
          <h3>{name}</h3>
          <p>{description[currentLang as keyof typeof description]}</p>
          <footer>
            <a href={demoLink} target='_blank' rel='noreferrer' className={s.action}>
              <HoverBtn>
                PREVIEW SITE <BsArrowRight />
              </HoverBtn>
            </a>
            <a href={repositoryLink} target='_blank' rel='noreferrer'>
              <GoMarkGithub />
            </a>
          </footer>
        </div>
      </Card>
    </li>
  );
};

export default ProjectItem;
