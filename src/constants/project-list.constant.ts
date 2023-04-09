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
      'Modern, fully responsive multi-step form with form validation and state management using React JS',
    projectPreviewImgPath: interactiveCommentsSection,
  },
  {
    id: 2,
    name: 'News homepage',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/-react-ts-newshomepage-zJdMzKZfIO',
    repositoryLink: 'https://github.com/LunZaiZai0223/FM-news-homepage',
    demoLink: 'https://lunzaizai0223.github.io/FM-news-homepage/',

    description:
      'Modern, fully responsive multi-step form with form validation and state management using React JS',
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
      'Modern, fully responsive multi-step form with form validation and state management using React JS',
    projectPreviewImgPath: urlShorteningApiLandingPage,
  },
  {
    id: 4,
    name: 'Interactive rating component',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/interactive-rating-component-solution-i63qg8aMvQ',
    repositoryLink: 'https://github.com/LunZaiZai0223/FM-interactive-rating-component',
    demoLink: 'https://lunzaizai0223.github.io/FM-interactive-rating-component/',

    description:
      'Modern, fully responsive multi-step form with form validation and state management using React JS',
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
      'Modern, fully responsive multi-step form with form validation and state management using React JS',
    projectPreviewImgPath: interactiveCardDetailsForm,
  },
  {
    id: 6,
    name: 'Social proof section',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/vue-socialproofsectionmaster-BkkQZHB89',
    repositoryLink: 'https://github.com/LunZaiZai0223/social-proof-section-master',
    demoLink: 'https://lunzaizai0223.github.io/social-proof-section-master/',
    description:
      'Modern, fully responsive multi-step form with form validation and state management using React JS',
    projectPreviewImgPath: socialProofSection,
  },
  {
    id: 7,
    name: 'Intro component with sign-up form',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/vueintro-component-with-signup-form-r1QiFb1E5',
    repositoryLink: 'https://github.com/LunZaiZai0223/intro-component-with-signup-form-master',
    description:
      'Modern, fully responsive multi-step form with form validation and state management using React JS',
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
    description:
      'Modern, fully responsive multi-step form with form validation and state management using React JS',
    projectPreviewImgPath: timeTrackingDashboard,
  },
  {
    id: 9,
    name: 'NFT preview card component',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/nft-preview-card-component-challenge-hub-9_9t5k7EZ',
    repositoryLink: 'https://github.com/LunZaiZai0223/layout_practice/tree/main/week09',
    demoLink: 'https://lunzaizai0223.github.io/layout_practice/week09/',
    description:
      'Modern, fully responsive multi-step form with form validation and state management using React JS',
    projectPreviewImgPath: nftPreviewCardComponent,
  },
  {
    id: 10,
    name: 'Testimonials grid section',
    frontendMentorSolutionLink:
      'https://www.frontendmentor.io/solutions/testimonials-grid-section-VoZLgjAPD',
    repositoryLink: 'https://github.com/LunZaiZai0223/layout_practice/tree/main/week07',
    demoLink: 'https://lunzaizai0223.github.io/layout_practice/week07/',
    description:
      'Modern, fully responsive multi-step form with form validation and state management using React JS',
    projectPreviewImgPath: testimonialsGridSection,
  },
];

export default PROJECT_LIST;
