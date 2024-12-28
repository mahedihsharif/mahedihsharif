import { useState } from "react";
import Education from "./ResumeContent/Education/Education";
import Experience from "./ResumeContent/Experience/Experience";
import Skills from "./ResumeContent/Skills/Skills";

const Resume = () => {
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);

  const handleEducation = () => {
    setEducation(true);
    setSkills(false);
    setExperience(false);
  };
  const handleSkills = () => {
    setEducation(false);
    setSkills(true);
    setExperience(false);
  };
  const handleExperience = () => {
    setEducation(false);
    setSkills(false);
    setExperience(true);
  };

  return (
    <div>
      <h1 className="text-center sm:text-5xl text-2xl font-secondary font-bold pt-40">
        My Resume
      </h1>
      <div className="lg:flex justify-between mt-28 bg-blueDark rounded-md shadow-primary shadow-md">
        <div
          className="cursor-pointer bg-redColor rounded-md shadow-primary shadow-md px-14"
          onClick={handleEducation}
        >
          <h4 className="text-xl font-semibold tracking-wide py-6  rounded-md">
            Education
          </h4>
        </div>
        <div
          className="bg-redColor cursor-pointer rounded-md shadow-primary shadow-md px-14 maxLg:my-5"
          onClick={handleSkills}
        >
          <h4 className="text-xl font-semibold tracking-wide py-6 ">Skills</h4>
        </div>
        <div
          className="bg-redColor cursor-pointer rounded-md shadow-primary shadow-md px-14"
          onClick={handleExperience}
        >
          {" "}
          <h4 className="text-xl font-semibold tracking-wide py-6">
            Experience
          </h4>
        </div>
      </div>

      {education && <Education />}
      {skills && <Skills />}
      {experience && <Experience />}
    </div>
  );
};

export default Resume;
