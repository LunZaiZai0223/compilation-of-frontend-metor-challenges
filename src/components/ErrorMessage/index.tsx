import { Link } from 'react-router-dom';

// components
import HoverBtn from '../../UI/HoverBtn';

// plugins
import { BsArrowRight } from 'react-icons/bs';

// style
import s from './index.module.scss';

const ErrorMessage = () => {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
      <Link to='/' replace className={s.link}>
        <HoverBtn styleClasses={s['back-btn']}>
          Go to Home <BsArrowRight />
        </HoverBtn>
      </Link>
    </div>
  );
};

export default ErrorMessage;
