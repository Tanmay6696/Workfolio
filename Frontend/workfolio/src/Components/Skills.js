import React from "react";
import "../Componentcss/Skills.css";
import Header from "./Header";
import SkillsItem from "./SkillsItem";
import '../Allcomponentfile.css'

const Skills = () => {
  return (
    <>
      
      <div className="interactive-card">
        <div className="mainskilldiv">
      
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
    
    </>
  );
};

export default Skills;
