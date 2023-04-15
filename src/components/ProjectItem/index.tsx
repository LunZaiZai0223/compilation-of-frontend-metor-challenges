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

  /** 處理專案名稱，有中英文會用|區隔 */
  const renderProjectName = (projectName: string) => {
    const splitProjectName = projectName.split('|');
    if (splitProjectName.length > 1) {
      return currentLang === 'zh-TW' ? splitProjectName[0] : splitProjectName[1];
    } else {
      return projectName;
    }
  };

  return (
    <li className={s['project-item']}>
      <Card>
        <div className={s['preview-img-wrapper']}>
          <img src={projectPreviewImgPath} alt='project preview' />
        </div>
        <div className={s['project-content-wrapper']}>
          <h3>{renderProjectName(name)}</h3>
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
