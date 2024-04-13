import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-wrap mb-8 mt-8">
      <div className="font-body font-bold text-3xl text-[#4731D3] h-56 ml-72 mt-12 lg:ml-36 lg:mt-12 lg:mb-12">
        Skills
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
    <div className="flex flex-col ">
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
    <div className="flex items-center lg:mb-[-50px] lg:ml-[180px]">
      <img
        src={`../logos/${imageName}`}
        alt=""
        className="w-40 h-40 mr-2 mb-[-20px] "
      />
      <p>{skillName}</p>
    </div>
  );
};

export default Skills;
