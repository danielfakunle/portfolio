import { images } from '../assets';
import FadeIn from './FadeIn';
import ProjectCard from './ProjectCard';

function Projects({ techStack }) {
  const projectImages = [images.photobankImage, images.smartlabImage];
  const projectInfo = {
    photobank: {
      title: 'PhotoBank',
      subtitle: 'UI Design',
      desc: 'PhotoBank is an stock photography website where users can choose from a large library of stock photos and videos.',
    },
    smartlab: {
      title: 'SmartLab',
      subtitle: 'UI Design, Full Stack Dev',
      desc: 'SmartLab is an AI sandbox where users can explore different AI models. V1.0 will feature the face detection model powered by Clarifai. It also features a ranking system where users can compare their engagement with others.',
    },
  };
  return (
    <div
      id='projects'
      className='bg-gray-100 container px-4 md:px-6 flex flex-col space-y-16 justify-center items-center py-16 lg:py-24'
    >
      <FadeIn>
        <div className='grid gap-4 md:grid-cols-8 lg:grid-cols-12'>
          <h3 className='text-3xl leading-none font-bold text-gray-900 text-center md:col-span-6 md:col-start-2 md:text-4xl lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3'>
            My Work
          </h3>
          <h4 className='text-lg font-normal text-gray-500 text-center row-start-2 md:col-span-6 md:col-start-2 md:text-xl lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4'>
            Each project is unique and specially crafted, ranging from designs
            to the full stack applications.
          </h4>
        </div>
      </FadeIn>
      <div className='w-full flex flex-col space-y-16'>
        <ProjectCard
          image={projectImages[1]}
          usedTech={{
            React: techStack.React,
            TypeScript: techStack.TypeScript,
            'Tailwind CSS': Object.values(techStack)[5],
            NodeJS: techStack.NodeJS,
            PostgreSQL: techStack.PostgreSQL,
            Figma: techStack.Figma,
            Photoshop: Object.values(techStack)[11],
          }}
          type={'software-dev'}
          info={projectInfo.smartlab}
          orientation={'normal'}
          site={'https://smart-lab.netlify.app/'}
          code={'https://github.com/danielfakunle/smartlab'}
          inDev={false}
        />
        <ProjectCard
          image={projectImages[0]}
          usedTech={{
            Figma: techStack.Figma,
            Photoshop: Object.values(techStack)[11],
          }}
          type={'ui-design'}
          info={projectInfo.photobank}
          orientation={'alternate'}
        />
      </div>
    </div>
  );
}

export default Projects;
