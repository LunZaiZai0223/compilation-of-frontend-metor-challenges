// components
import { Outlet } from 'react-router-dom';

// style
import s from './index.module.scss';

const BasicLayout = () => {
  return (
    <main className={s['basic-layout-container']}>
      <Outlet />
    </main>
  );
};

export default BasicLayout;
