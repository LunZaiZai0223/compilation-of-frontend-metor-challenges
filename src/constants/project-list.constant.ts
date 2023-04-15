// assetes
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
import eShop from '../assets/project-previews/e-shop.png';
import welcomeToTaiwan from '../assets/project-previews/welcome-to-taiwan.png';
import ticTacToe from '../assets/project-previews/tic-tac-toe.png';
import youtubeApiWithVue from '../assets/project-previews/youtube-api-with-vue.png';
import taiwanReservoirInfo from '../assets/project-previews/taiwan-reservoir-info.png';

export interface Project {
  name: string;
  i18nKey: string;
  frontendMentorSolutionLink?: string;
  repositoryLink: string;
  demoLink: string;
  id: number;
  description: Description;
  projectPreviewImgPath?: string;
  category: string;
}

export interface Description {
  'en-US': string;
  'zh-TW': string;
}

const PROJECT_LIST: Project[] = [
  {
    id: 1,
    i18nKey: 'commentsSection',
    name: 'Interactive comments section',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/react-ts-rtk-interactivecommentssection-3Gd1J40P5K',
    repositoryLink: 'https://github.com/LunZaiZai0223/FM-interactive-comments-section',
    demoLink: 'https://lunzaizai0223.github.io/FM-interactive-comments-section/',
    description: {
      'en-US':
        'A messaging board built with React + TypeScript + Redux Toolkit. The data structure provided by the design draft is nested, so <CommentList /> is created recursively to reduce code redundancy.',
      'zh-TW':
        '使用 React + TypeScript + Redux Toolkit 做的留言版，設計稿給的資料結構為巢狀，因此透過遞迴建立 <CommentList />，減少程式碼的重複性。',
    },
    projectPreviewImgPath: interactiveCommentsSection,
    category: 'frontend-mentor',
  },
  {
    id: 2,
    i18nKey: 'newsHomePage',
    name: 'News homepage',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/-react-ts-newshomepage-zJdMzKZfIO',
    repositoryLink: 'https://github.com/LunZaiZai0223/FM-news-homepage',
    demoLink: 'https://lunzaizai0223.github.io/FM-news-homepage/',
    description: {
      'en-US': 'React + TypeScript + SCSS flexbox is used to maintain the style on mobile devices.',
      'zh-TW': 'React + TypeScript + SCSS flex 結合排版，讓手機版介面也可以保持設計稿的樣式。',
    },
    projectPreviewImgPath: newsHomepage,
    category: 'frontend-mentor',
  },
  {
    id: 3,
    i18nKey: 'urlShortening',
    name: 'URL shortening API landing page',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/react-ts-redux-urlshorteningapi-AH85O041Uw',
    repositoryLink: 'https://github.com/LunZaiZai0223/FM-url-shortening-api',
    demoLink: 'https://lunzaizai0223.github.io/FM-url-shortening-api/',
    description: {
      'en-US':
        'Developed with React + TypeScript + Redux. App-wide state is not managed using Redux Toolkit to practice the data flow of Redux which makes me have better a understanding of how Redux Toolkit solves the problem of verbose boilerplate code in Redux.',
      'zh-TW':
        'React + TypeScript + Redux 開發。不使用 Redux Toolkit 管理 app-wide state，藉此練習 Redux 的資料流，也更能理解 Redux Toolkit 解決 Redux 冗長的 boilerplate code 的痛點。',
    },
    projectPreviewImgPath: urlShorteningApiLandingPage,
    category: 'frontend-mentor',
  },
  {
    id: 4,
    i18nKey: 'ratingComponent',
    name: 'Interactive rating component',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/interactive-rating-component-solution-i63qg8aMvQ',
    repositoryLink: 'https://github.com/LunZaiZai0223/FM-interactive-rating-component',
    demoLink: 'https://lunzaizai0223.github.io/FM-interactive-rating-component/',
    description: {
      'en-US':
        'A rating component implemented with React + TypeScript, managing the operation steps and displaying the corresponding page through state.',
      'zh-TW': 'React + TypeScript 實作的評分元件，透過 state 管理操作步驟並顯示對應的頁面。',
    },
    projectPreviewImgPath: interactiveRatingComponent,
    category: 'frontend-mentor',
  },
  {
    id: 5,
    i18nKey: 'cardDetailsForm',
    name: 'Interactive card details form',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/interactive-card-details-form-solution-5Zb73MTnpu',
    repositoryLink: 'https://github.com/LunZaiZai0223/Interactive-card-details-form',
    demoLink: 'https://lunzaizai0223.github.io/Interactive-card-details-form/',
    description: {
      'en-US':
        'Developed with React + TypeScript. A custom hook useInput is created to manage the state of the input field (the entered value and whether the field has been clicked), which is used to implement form validation and display the current input state to the user through the UI.',
      'zh-TW':
        'React + TypeScript 開發。建立 custom hook useInput 管理欄位的狀態（輸入的值及欄位是否被點擊過），藉此實作表單驗證，並透過 UI 顯示告知使用者當前欄位輸入的狀態。',
    },
    projectPreviewImgPath: interactiveCardDetailsForm,
    category: 'frontend-mentor',
  },
  {
    id: 6,
    i18nKey: 'socialProofSection',
    name: 'Social proof section',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/vue-socialproofsectionmaster-BkkQZHB89',
    repositoryLink: 'https://github.com/LunZaiZai0223/social-proof-section-master',
    demoLink: 'https://lunzaizai0223.github.io/social-proof-section-master/',
    description: {
      'en-US': 'Developed with Vue2 and implemented the layout using semantic HTML tags.',
      'zh-TW': 'Vue2 開發，並搭配語義化 HTML 標籤實作設計稿頁面。',
    },
    projectPreviewImgPath: socialProofSection,
    category: 'frontend-mentor',
  },
  {
    id: 7,
    i18nKey: 'signUpForm',
    name: 'Intro component with sign-up form',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/vueintro-component-with-signup-form-r1QiFb1E5',
    repositoryLink: 'https://github.com/LunZaiZai0223/intro-component-with-signup-form-master',
    description: {
      'en-US': 'Developed with Vue2 and implementing form validation.',
      'zh-TW': 'Vue2 開發，參照設計稿切版並實作表單驗證。',
    },
    demoLink: 'https://lunzaizai0223.github.io/intro-component-with-signup-form-master/',
    projectPreviewImgPath: introComponentWithSignUpForm,
    category: 'frontend-mentor',
  },
  {
    id: 8,
    i18nKey: 'timeTrackingDashboard',
    name: 'Time tracking dashboard',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/vue-timetrackingdashboardmain-nZPmAZlsgX',
    repositoryLink: 'https://github.com/LunZaiZai0223/time-tracking-dashboard-main',
    demoLink: 'https://lunzaizai0223.github.io/time-tracking-dashboard-main/',
    description: {
      'en-US': 'Implement the layout by using Vue2 + CSS grid.',
      'zh-TW': 'Vue2 + CSS grid 實作設計稿頁面，透過 data 控制顯示不同時間選項的資料。',
    },
    projectPreviewImgPath: timeTrackingDashboard,
    category: 'frontend-mentor',
  },
  {
    id: 9,
    i18nKey: 'nftCard',
    name: 'NFT preview card component',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/nft-preview-card-component-challenge-hub-9_9t5k7EZ',
    repositoryLink: 'https://github.com/LunZaiZai0223/layout_practice/tree/main/week09',
    demoLink: 'https://lunzaizai0223.github.io/layout_practice/week09/',
    description: {
      'en-US': 'Implement the layout by using semantic HTML + SCSS.',
      'zh-TW': '語義化 HTML + SCSS 切出設計稿的版面。',
    },
    projectPreviewImgPath: nftPreviewCardComponent,
    category: 'frontend-mentor',
  },
  {
    id: 10,
    i18nKey: 'testimonialsGrid',
    name: 'Testimonials grid section',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/testimonials-grid-section-VoZLgjAPD',
    repositoryLink: 'https://github.com/LunZaiZai0223/layout_practice/tree/main/week07',
    demoLink: 'https://lunzaizai0223.github.io/layout_practice/week07/',
    description: {
      'en-US': 'Implement the layout by using semantic HTML + SCSS grid.',
      'zh-TW': '語義化 HTML + SCSS grid 切出設計稿版面。',
    },
    projectPreviewImgPath: testimonialsGridSection,
    category: 'frontend-mentor',
  },
  {
    id: 11,
    i18nKey: 'reservoirInfo',
    name: '臺灣水庫資訊|Taiwan Reservoir Info',
    repositoryLink: 'https://github.com/LunZaiZai0223/taiwan-reservoir-info',
    demoLink: 'https://lunzaizai0223.github.io/taiwan-reservoir-info/',
    description: {
      'en-US':
        'Developed with Angular,connected to the reservoir information API, and used ng-apexcharts to implement charts, ngx-translate to implement i18n language switching (Chinese/English), and Rx.js to call different APIs and organize the information needed for the page.',
      'zh-TW':
        '使用 Angular 開發，串接水庫資訊 API，並使用 ng-apexcharts 實作圖表、ngx-translate 實作 i18n 語系切換（中/英）以及 Rx.js 呼叫不同 API 並整理成頁面所需的資訊。排版則是使用 SCSS + flexbox，並依照目前樣式模式渲染明亮或黑暗模式的介面。',
    },
    projectPreviewImgPath: taiwanReservoirInfo,
    category: 'others',
  },
  {
    id: 12,
    i18nKey: 'youtubeApiWithVue',
    name: 'Youtube API with Vue',
    repositoryLink: 'https://github.com/LunZaiZai0223/vue-youtube-project',
    demoLink: 'https://lunzaizai0223.github.io/vue-youtube-project/',
    description: {
      'en-US':
        // eslint-disable-next-line quotes
        `Developed with Vue + Vuex, connected to the Youtube API to retrieve the top 200 videos in Taiwan, used packages to render the Youtube player, and stored the user's favorite videos using localStorage. Used Web API IntersectionObserver to implement lazy loading of images and infinite scrolling.`,
      'zh-TW':
        '使用 Vue + vuex 開發，串接 Youtube API 抓取台灣熱門前 200 名次的影片，用套件渲染 Youtube 播放器，並且搭配 localStorage 儲存使用者收藏的影片。介面使用 Web API IntersectionObserver 實作圖片 lazy loading 及無限滾動。',
    },
    projectPreviewImgPath: youtubeApiWithVue,
    category: 'others',
  },
  {
    id: 13,
    i18nKey: 'minEShop',
    name: '模擬小型電商網站|Minimalist E commerce',
    repositoryLink: 'https://github.com/LunZaiZai0223/shop-web',
    demoLink: 'https://lunzaizai0223.github.io/shop-web/',
    description: {
      'en-US':
        'Based on a single-page design provided by an online course, simulated the concept of framework components using JS, SCSS, and HTML, and divided the webpage into different components. The routing control is simulated by changing the route #(hash). This helps me understand the pain points of manually manipulating DOM elements when developing a page using basic JS + HTML instead of modern frontend frameworks.',
      'zh-TW':
        '以線上課程提供的單頁設計稿為基礎，使用 JS, SCSS 及 HTML 模擬框架的 component 觀念，將網頁區分成不同的元件。並且透過更改路由 #(hash) 模擬路由控制。藉此理解現代前端框架解決單使用基本 JS + HTML 開發頁面時需要手動且繁瑣的步驟操控 DOM 元素的痛點。',
    },
    projectPreviewImgPath: eShop,
    category: 'others',
  },
  {
    id: 14,
    i18nKey: 'taiwanSpot',
    name: '臺灣旅遊景點導覽|Taiwan Spots',
    repositoryLink: 'https://github.com/LunZaiZai0223/THE_F2E_3rd_Week01',
    demoLink: 'https://lunzaizai0223.github.io/THE_F2E_3rd_Week01/',
    description: {
      // eslint-disable-next-line quotes
      'en-US': `Developed based on the design of THE F2E 3rd online event using JS, SCSS, and HTML. Connected to the government's Open API data using Fetch API, users can search and obtain travel and food information for various counties and cities.`,
      'zh-TW':
        '參加線上活動 THE F2E 3rd 參照設計稿並以 JS, SCSS 及 HTML 開發。使用 Fetch API 串接政府 Open API 資料，使用者可以透過搜尋取得各縣市的旅遊及美食資訊。',
    },
    projectPreviewImgPath: welcomeToTaiwan,
    category: 'others',
  },
  {
    id: 15,
    i18nKey: 'ticTacToe',
    name: 'Tic-Tac-Toe',
    repositoryLink: 'https://github.com/LunZaiZai0223/Tic-Tac-Toe',
    demoLink: 'https://lunzaizai0223.github.io/Tic-Tac-Toe/',
    description: {
      'en-US':
        'A small game developed using JS, SCSS, and HTML, with two modes available (2-player vs mode and player vs computer mode). The code uses immediately invoked function expressions to modularize the code.',
      'zh-TW':
        '使用 JS, SCSS 及 HTML 開發的小遊戲，總共有兩種模式（雙人對戰、與電腦對戰）。程式碼使用立即函式區分模組，藉此理解 ES6 後提供的模組化功能的便利性。',
    },
    projectPreviewImgPath: ticTacToe,
    category: 'others',
  },
];

export default PROJECT_LIST;
