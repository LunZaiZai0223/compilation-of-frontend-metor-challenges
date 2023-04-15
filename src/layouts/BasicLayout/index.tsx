import { Outlet } from 'react-router-dom';

// components
import ScrollToTop from '../../components/ScrollToTop';

// style
import s from './index.module.scss';

const BasicLayout = () => {
  return (
    <>
      <ScrollToTop />
      <main className={s['basic-layout-container']}>
        <Outlet />
      </main>
    </>
  );
};

export default BasicLayout;
