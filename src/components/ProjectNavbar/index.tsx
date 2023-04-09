import { Link } from 'react-router-dom';

// components
import FadeAndMove from '../../UI/FadeAndMove';

// plugins
import { AiFillHome } from 'react-icons/ai';

// style
import s from './index.module.scss';

const ProjectNavbar = () => {
  return (
    <FadeAndMove direction={'horizontal'} timeout={2000} moveDistanceType={'sm'}>
      <div>
        <nav className={s.navbar}>
          <h2>CHALLENGES</h2>
        </nav>
        <div className={s['sub-navbar']}>
          <Link to='../' className={s.action}>
            <AiFillHome /> HOME
          </Link>
        </div>
      </div>
    </FadeAndMove>
  );
};

export default ProjectNavbar;
