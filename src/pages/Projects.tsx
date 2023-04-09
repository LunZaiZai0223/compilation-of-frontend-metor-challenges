// components
import ProjectsPageLayout from '../layouts/ProjectsPageLayout';
import ProjectList from '../components/ProjectList';
import ProjectNavbar from '../components/ProjectNavbar';
import HireMeMessage from '../components/HireMeMessage';

const Projects = () => {
  return (
    <ProjectsPageLayout>
      <ProjectNavbar />
      <ProjectList />
      <HireMeMessage />
    </ProjectsPageLayout>
  );
};

export default Projects;
