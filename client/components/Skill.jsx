import React from 'react'
import skill from '../../data/skill'

function Skill(props){
  const programming = skill.map(elem =>{
    return elem.programming
  })
  const design = skill.map(elem=>{
    return elem.design
  })
  const other = skill.map(elem=>{
    return elem.other
  })
  return(
    <>
    <span ref={props.scrollSkills} className="breaker">
      <h2>SKILLS</h2>
    </span>
    <div className="skills">
      <fieldset className="skillFieldset">
        <legend><h3>PROGRAMMING</h3></legend>
        {programming[0].map((item,i)=>{
          return(
            <>
            <h4 key={i}>{item.replace('_', ' & ')}</h4>
            <div className="skillsContainer">
              <div key={i} className={`skill ${item}`}></div>
            </div>
            </>
          )
        })}
      </fieldset>
      <fieldset className="skillFieldset">
        <legend><h3>DESIGN</h3></legend>
        {design[0].map((item,i)=>{
          return(
            <>
              <h4 key={i}>{item}</h4>
              <div className="skillsContainer">
                <div key={i} className={`skill ${item}`}></div>
              </div>
            </>
          )
        })}
      </fieldset>
      <fieldset className="skillFieldset">
        <legend><h3>OTHER</h3></legend>
        {other[0].map((item,i)=>{
          return(
            <>
              <h4 key={i}>{item.replace('_', ' ')}</h4>
              <div className="skillsContainer">
                <div key={i} className={`skill ${item}`}></div>
              </div>
            </>
          )
        })}
      </fieldset>
    </div>
    </>
  )
}

export default Skill;