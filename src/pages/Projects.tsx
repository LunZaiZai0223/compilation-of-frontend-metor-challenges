import { useSearchParams } from 'react-router-dom';
// components
import ProjectsPageLayout from '../layouts/ProjectsPageLayout';
import ProjectList from '../components/ProjectList';
import ProjectNavbar from '../components/ProjectNavbar';
import HireMeMessage from '../components/HireMeMessage';

// constants
import PROJECT_LIST from '../constants/project-list.constant';

const Projects = () => {
  const [search] = useSearchParams();
  const currentCategoryParam = search.get('category') ?? 'frontend-mentor';
  const currentProjectList = PROJECT_LIST.filter(
    (project) => project.category === currentCategoryParam,
  );

  return (
    <ProjectsPageLayout>
      <ProjectNavbar />
      <ProjectList projectList={currentProjectList} />
      <HireMeMessage />
    </ProjectsPageLayout>
  );
};

export default Projects;
