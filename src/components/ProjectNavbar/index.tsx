import { Link, useSearchParams } from 'react-router-dom';

// components
import FadeAndMove from '../../UI/FadeAndMove';

// plugins
import { AiFillHome, AiFillProject, AiOutlineProject } from 'react-icons/ai';

// style
import s from './index.module.scss';

interface SubNavbarItem {
  subTitle: string;
  searchParams: string;
  icon: React.ReactElement;
}

const subNavbarList: SubNavbarItem[] = [
  {
    subTitle: 'Frontend Mentor',
    searchParams: '?category=frontend-mentor',
    icon: <AiOutlineProject />,
  },
  {
    subTitle: 'Others',
    searchParams: '?category=others',
    icon: <AiFillProject />,
  },
];

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
  const navTitle = getNavTitle(search.get('category'));

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
            const { subTitle, icon, searchParams } = subNavbar;
            return (
              <li key={index}>
                <Link relative='path' to={{ search: searchParams }} className={s.action}>
                  {icon} {subTitle}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </FadeAndMove>
  );
};

export default ProjectNavbar;
