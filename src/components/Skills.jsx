import React from "react";
import useTheme from "../contexts/theme";
import useTranslations from "../hooks/useTranslations";

const Skills = () => {
  const { themeMode } = useTheme();
  const backgroundClass =
    themeMode === "dark" ? "bg-[#2B2727] text-white" : "bg-white";
  const skillsTextClass =
    themeMode === "dark" ? "text-[#CBF281]" : "text-[#4731D3]";

  const { t } = useTranslations();

  return (
    <div className={`flex flex-col lg:flex-row flex-wrap  ${backgroundClass}`}>
      <div
        className={`font-body font-bold text-4xl h-56 lg:h-[400px] mb-[-200px] ml-12 mt-12 lg:ml-36 lg:mt-16 lg:mb-6 ${skillsTextClass}`}
      >
        {t.skills}
      </div>
      <SkillColumn
        skills={[
          { imageName: "js-logo.png", skillName: "JAVASCRIPT" },
          { imageName: "react-logo.png", skillName: "REACT" },
          { imageName: "redux-logo.png", skillName: "REDUX" },
        ]}
      />
      <SkillColumn
        skills={[
          { imageName: "node-logo.png", skillName: "NODE" },
          { imageName: "vs-logo.png", skillName: "VSC" },
          { imageName: "figma-logo.png", skillName: "FIGMA" },
        ]}
      />
    </div>
  );
};

const SkillColumn = ({ skills }) => {
  return (
    <div className="font-body font-semibold text-md text-gray-400 flex flex-col justify-start ml-[80px] mt-[0px] lg:mt-6">
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          imageName={skill.imageName}
          skillName={skill.skillName}
        />
      ))}
    </div>
  );
};

const SkillItem = ({ imageName, skillName }) => {
  return (
    <div className="flex items-center lg:mb-[-50px]">
      <img
        src={`../logos/${imageName}`}
        alt=""
        className="w-auto  h-[200px] mr-2 ml-[-80px] lg:ml-[140px] mb-[-20px] "
      />
      <p>{skillName}</p>
    </div>
  );
};

export default Skills;
