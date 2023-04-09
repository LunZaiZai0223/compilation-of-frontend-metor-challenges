import interactiveCommentsSection from '../assets/project-previews/interactive-comments-section.jpg';
import interactiveCardDetailsForm from '../assets/project-previews/interactive-card-details-form.jpg';
import interactiveRatingComponent from '../assets/project-previews/interactive-rating-component.jpg';
import introComponentWithSignUpForm from '../assets/project-previews/intro-component-with-sign-up-form.jpg';
import newsHomepage from '../assets/project-previews/news-homepage.jpg';
import nftPreviewCardComponent from '../assets/project-previews/nft-preview-card-component.jpg';
import socialProofSection from '../assets/project-previews/social-proof-section.jpg';
import testimonialsGridSection from '../assets/project-previews/testimonials-grid-section.jpg';
import timeTrackingDashboard from '../assets/project-previews/time-tracking-dashboard.jpg';
import urlShorteningApiLandingPage from '../assets/project-previews/url-shortening-api-landing-page.jpg';

export interface Project {
  name: string;
  frontendMentorSolutionLink: string;
  repositoryLink: string;
  demoLink: string;
  id: number;
  description?: string;
  projectPreviewImgPath?: string;
}

const PROJECT_LIST: Project[] = [
  {
    id: 1,
    name: 'Interactive comments section',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/react-ts-rtk-interactivecommentssection-3Gd1J40P5K',
    repositoryLink: 'https://github.com/LunZaiZai0223/FM-interactive-comments-section',
    demoLink: 'https://lunzaizai0223.github.io/FM-interactive-comments-section/',
    description:
      '使用 React + TypeScript + Redux Toolkit 做的留言版，設計稿給的資料結構為巢狀，因此透過遞迴建立 <CommentList />，減少程式碼的重複性。',
    projectPreviewImgPath: interactiveCommentsSection,
  },
  {
    id: 2,
    name: 'News homepage',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/-react-ts-newshomepage-zJdMzKZfIO',
    repositoryLink: 'https://github.com/LunZaiZai0223/FM-news-homepage',
    demoLink: 'https://lunzaizai0223.github.io/FM-news-homepage/',
    description: 'React + TypeScript + SCSS flex 結合排版，讓手機版介面也可以保持設計稿的樣式。',
    projectPreviewImgPath: newsHomepage,
  },
  {
    id: 3,
    name: 'URL shortening API landing page',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/react-ts-redux-urlshorteningapi-AH85O041Uw',
    repositoryLink: 'https://github.com/LunZaiZai0223/FM-url-shortening-api',
    demoLink: 'https://lunzaizai0223.github.io/FM-url-shortening-api/',
    description:
      'React + TypeScript + Redux 開發。不使用 Redux Toolkit 管理 app-wide state，藉此練習 Redux 的資料流，也更能理解 Redux Toolkit 解決 Redux 冗長的 boilerplate code 的痛點。',
    projectPreviewImgPath: urlShorteningApiLandingPage,
  },
  {
    id: 4,
    name: 'Interactive rating component',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/interactive-rating-component-solution-i63qg8aMvQ',
    repositoryLink: 'https://github.com/LunZaiZai0223/FM-interactive-rating-component',
    demoLink: 'https://lunzaizai0223.github.io/FM-interactive-rating-component/',
    description: 'React + TypeScript 實作的評分元件，透過 state 管理操作步驟並顯示對應的頁面。',
    projectPreviewImgPath: interactiveRatingComponent,
  },
  {
    id: 5,
    name: 'Interactive card details form',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/interactive-card-details-form-solution-5Zb73MTnpu',
    repositoryLink: 'https://github.com/LunZaiZai0223/Interactive-card-details-form',
    demoLink: 'https://lunzaizai0223.github.io/Interactive-card-details-form/',
    description:
      'React + TypeScript 開發。建立 custom hook useInput 管理欄位的狀態（輸入的值及欄位是否被點擊過），藉此實作表單驗證，並透過 UI 顯示告知使用者當前欄位輸入的狀態。',
    projectPreviewImgPath: interactiveCardDetailsForm,
  },
  {
    id: 6,
    name: 'Social proof section',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/vue-socialproofsectionmaster-BkkQZHB89',
    repositoryLink: 'https://github.com/LunZaiZai0223/social-proof-section-master',
    demoLink: 'https://lunzaizai0223.github.io/social-proof-section-master/',
    description: 'Vue2 開發，並搭配語義化 HTML 標籤實作設計稿頁面。',
    projectPreviewImgPath: socialProofSection,
  },
  {
    id: 7,
    name: 'Intro component with sign-up form',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/vueintro-component-with-signup-form-r1QiFb1E5',
    repositoryLink: 'https://github.com/LunZaiZai0223/intro-component-with-signup-form-master',
    description: 'Vue2 開發，參照設計稿切版並實作建議表單驗證。',
    demoLink: 'https://lunzaizai0223.github.io/intro-component-with-signup-form-master/',
    projectPreviewImgPath: introComponentWithSignUpForm,
  },
  {
    id: 8,
    name: 'Time tracking dashboard',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/vue-timetrackingdashboardmain-nZPmAZlsgX',
    repositoryLink: 'https://github.com/LunZaiZai0223/time-tracking-dashboard-main',
    demoLink: 'https://lunzaizai0223.github.io/time-tracking-dashboard-main/',
    description: 'Vue2 + CSS grid 實作設計稿頁面，透過 data 控制顯示不同時間選項的資料。',
    projectPreviewImgPath: timeTrackingDashboard,
  },
  {
    id: 9,
    name: 'NFT preview card component',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/nft-preview-card-component-challenge-hub-9_9t5k7EZ',
    repositoryLink: 'https://github.com/LunZaiZai0223/layout_practice/tree/main/week09',
    demoLink: 'https://lunzaizai0223.github.io/layout_practice/week09/',
    description: '語義化 HTML + SCSS 切出設計稿的版面。',
    projectPreviewImgPath: nftPreviewCardComponent,
  },
  {
    id: 10,
    name: 'Testimonials grid section',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/testimonials-grid-section-VoZLgjAPD',
    repositoryLink: 'https://github.com/LunZaiZai0223/layout_practice/tree/main/week07',
    demoLink: 'https://lunzaizai0223.github.io/layout_practice/week07/',
    description: '語義化 HTML + SCSS grid 切出設計稿版面。',
    projectPreviewImgPath: testimonialsGridSection,
  },
];

export default PROJECT_LIST;
