import { useTranslation } from 'react-i18next';

// components
import FadeAndMove from '../../UI/FadeAndMove';

// plugins
import { IoLanguageSharp } from 'react-icons/io5';

// style
import s from './index.module.scss';

const SupportBar = () => {
  const { i18n } = useTranslation();
  const handleChangeLang = () => {
    const currentLang = i18n.language;
    if (currentLang.includes('en')) {
      i18n.changeLanguage('zh-TW');
    } else {
      i18n.changeLanguage('en-US');
    }
  };

  return (
    <FadeAndMove direction={'horizontal'} timeout={2000} moveDistanceType={'sm'}>
      <div className={s['support-bar-container']}>
        <button className={s['support-action']} onClick={handleChangeLang}>
          <IoLanguageSharp />
        </button>
      </div>
    </FadeAndMove>
  );
};

export default SupportBar;
