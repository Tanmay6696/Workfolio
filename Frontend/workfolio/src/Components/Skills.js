import React from "react";
import "../Componentcss/Skills.css";
import Header from "./Header";
import SkillsItem from "./SkillsItem";
import '../Allcomponentfile.css'

const Skills = () => {
  return (
    <>
      <Header name="Skills"/>
      
      <div className="interactive-card">
        <div className="mainskilldiv">
      <p>Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.</p>
        <SkillsItem/>
        {/* <SkillsItem/>
        <SkillsItem/>
        <SkillsItem/>
        <SkillsItem/>
        <SkillsItem/>
        <SkillsItem/>
        <SkillsItem/> */}
          
        </div>
      </div>
    
    </>
  );
};

export default Skills;
