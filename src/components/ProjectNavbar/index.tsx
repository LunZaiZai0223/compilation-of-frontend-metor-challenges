import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// components
import FadeAndMove from '../../UI/FadeAndMove';
import Tooltip from '../../UI/Tooltip';

// plugins
import { AiFillHome, AiFillProject, AiOutlineProject } from 'react-icons/ai';

// style
import s from './index.module.scss';

interface SubNavbarItem {
  subTitle: string;
  searchParams: string;
  icon: React.ReactElement;
  tooltipContent: React.ReactElement;
}

const getNavTitle = (query: string | null) => {
  switch (query) {
    case 'frontend-mentor':
      return 'CHALLENGES';

    case 'others':
      return 'PROJECTS';

    default:
      return 'CHALLENGES';
  }
};

const ProjectNavbar = () => {
  const [search] = useSearchParams();
  const { t } = useTranslation();
  const navTitle = getNavTitle(search.get('category'));

  const subNavbarList: SubNavbarItem[] = [
    {
      subTitle: 'Frontend Mentor',
      searchParams: '?category=frontend-mentor',
      icon: <AiOutlineProject />,
      tooltipContent: (
        <span className={s['tooltip-content']}>
          {t('components.subNavbar.tooltipContent.frontendMentor')}
        </span>
      ),
    },
    {
      subTitle: 'Others',
      searchParams: '?category=others',
      icon: <AiFillProject />,
      tooltipContent: (
        <span className={s['tooltip-content']}>
          {t('components.subNavbar.tooltipContent.others')}
        </span>
      ),
    },
  ];

  return (
    <FadeAndMove direction={'horizontal'} timeout={2000} moveDistanceType={'sm'}>
      <div>
        <nav className={s.navbar}>
          <h2>{navTitle}</h2>
        </nav>
        <ul className={s['sub-navbar']}>
          <li>
            <Link to='../' className={s.action}>
              <AiFillHome /> HOME
            </Link>
          </li>
          {subNavbarList.map((subNavbar, index) => {
            const { subTitle, icon, searchParams, tooltipContent } = subNavbar;
            return (
              <li key={index}>
                <Tooltip content={tooltipContent}>
                  <Link relative='path' to={{ search: searchParams }} className={s.action}>
                    {icon} {subTitle}
                  </Link>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </div>
    </FadeAndMove>
  );
};

export default ProjectNavbar;
