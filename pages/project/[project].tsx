import { Project } from 'components';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Projects } from 'projects';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Projects.map((project) => ({
    params: { project: project.title },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params: { project } }) => {
  return { props: { project } };
};

export default Project;
