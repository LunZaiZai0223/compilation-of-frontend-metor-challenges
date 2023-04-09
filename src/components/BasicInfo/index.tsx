// components
import FadeAndMove from '../../UI/FadeAndMove';
import HoverBtn from '../../UI/HoverBtn';

// plugins
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// style
import s from './index.module.scss';

const BasicInfo = () => {
  return (
    <div className={s['info-container']}>
      <div className={s.wrapper}>
        <FadeAndMove timeout={2000} direction={'vertical'} moveDistanceType={'sm'}>
          <h1 className={s['job-title']}>
            <span>FRONT</span>END DEV
          </h1>
        </FadeAndMove>
        <div className={s['description-wrapper']}>
          <FadeAndMove timeout={2000} moveDistanceType={'sm'} direction={'horizontal'}>
            <div className={s.left}>
              <p>
                Compilation of <br />
                <a href='https://www.frontendmentor.io/challenges' target='_blank' rel='noreferrer'>
                  frontendmentor.io
                </a>
                <br />
                challenges coded <br />
                by{' '}
                <a href='https://github.com/LunZaiZai0223' target='_blank' rel='noreferrer'>
                  Wei-Lun Liu
                </a>
              </p>
              <span className={s['hire-me-text']}>
                Need a web developer?&ensp;
                <a
                  href='https://www.cakeresume.com/liu-wei-lun0223'
                  target='_blank'
                  rel='noreferrer'
                >
                  Hire me.
                </a>
              </span>
            </div>
          </FadeAndMove>

          <FadeAndMove timeout={2000} direction={'horizontal'} moveDistanceType={'sm'}>
            <div className={s.right}>
              <p>Passion is the point</p>
              <Link className={s.navigate} to='projects'>
                <HoverBtn>
                  Go to projects
                  <BsArrowRight />
                </HoverBtn>
              </Link>
            </div>
          </FadeAndMove>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
