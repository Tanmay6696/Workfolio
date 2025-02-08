import React from "react";
import "../Componentcss/Skills.css";
import Header from "./Header";
import SkillsItem from "./SkillsItem";
import '../Allcomponentfile.css'

const Skills = ({user}) => {
  // console.log("userdata",user);
  
  const skills=user?.skills;

  return (
    <>
      
      <div className="interactive-card">
        <div className="mainskilldiv">
          {skills && skills.map((skill,index) => ( 
            <SkillsItem key={index} skill={skill}/>
          ))}          
        </div>
      </div>
    
    </>
  );
};

export default Skills;
