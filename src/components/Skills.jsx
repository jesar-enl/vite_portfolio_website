import { Typography } from '@material-tailwind/react';

const skillsData = [
  { name: 'HTML', icon: <img src="/icons8-html-5.svg" /> },
  { name: 'CSS', icon: <img src="/icons8-css3.svg" /> },
  { name: 'JavaScript', icon: <img src="/icons8-javascript.svg" /> },
  { name: 'React', icon: <img src="/icons8-react-native.svg" /> },
  { name: 'Tailwind CSS', icon: <img src="/icons8-tailwind-css.svg" /> },
  { name: 'Git', icon: <img src="/icons8-git.svg" /> },
  { name: 'Bootstrap', icon: <img src="/icons8-bootstrap.svg" /> },
  { name: 'Nextjs', icon: <img src="/icons8-nextjs.svg" /> },
];

const Skills = () => {
  return (
    <div>
      <Typography
        variant="h3"
        className="text-center mt-10 bg-blue-gray-200 h-max mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 opacity-40 rounded-lg"
      >
        My Top Skills
      </Typography>
      <div
        className="flex flex-col md:flex-row justify-center items-center bg-blue-gray-200  rounded p-20"
        id="skills"
      >
        <div className="flex flex-wrap justify-center items-center ">
          {skillsData.slice(0, 3).map((skill) => (
            <div
              key={skill.name}
              className="m-4 bg-gray-200 rounded-lg p-6 flex flex-col items-center "
            >
              {skill.icon}
              <p className="text-center text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {skillsData.slice(3).map((skill) => (
            <div
              key={skill.name}
              className="m-4 bg-gray-200 rounded-lg p-6 flex flex-col items-center"
            >
              {skill.icon}
              <p className="text-center text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
