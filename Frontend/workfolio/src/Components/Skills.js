import React from "react";
import "../Componentcss/Skills.css";
import Header from "./Header";
import SkillsItem from "./SkillsItem";
const Skills = () => {
  return (
    <div className="skills">
      <Header name="Skills"/>
      
      
      <div className="skilldiv">
        <div className="allskills">
        <SkillsItem/>
        <SkillsItem/>
        <SkillsItem/>
        <SkillsItem/>
        <SkillsItem/>
        <SkillsItem/>
        <SkillsItem/>
        <SkillsItem/>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
