import React, {createRef} from 'react'
import { HashRouter as Router, Route} from "react-router-dom";

import Navi from './Navi'
import Personal from './Personal'
import Education from './Education'
import WorkDisplay from './WorkDisplay'
import Skill from './Skill'
import Contact from './Contact'
import Achievement from './Achievement';

class App extends React.Component{
  scrollEdu = createRef();
  scrollWork = createRef();
  scrollSkills = createRef();
  scrollContact = createRef();
  scrollAchievement = createRef();

  scrollEduSmoothHandler = () => {
    this.scrollEdu.current.scrollIntoView({ behavior: "smooth"});
  };

  scrollWorkSmoothHandler = () => {
    this.scrollWork.current.scrollIntoView({ behavior: "smooth"});
  };

  scrollAchievementSmoothHandler = () => {
    this.scrollAchievement.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollSkillSmoothHandler = () => {
    this.scrollSkills.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollContactSmoothHandler = () => {
    this.scrollContact.current.scrollIntoView({ behavior: "smooth" });
  };

  render(){
    return(
      <>
        <Router>
          <Route path="/">
            <Navi
            scrollEduSmoothHandler={this.scrollEduSmoothHandler} 
            scrollWorkSmoothHandler={this.scrollWorkSmoothHandler}
            scrollSkillSmoothHandler={this.scrollSkillSmoothHandler}
            scrollContactSmoothHandler={this.scrollContactSmoothHandler}
            scrollAchievementSmoothHandler={this.scrollAchievementSmoothHandler}>
            </Navi>
          </Route>
          <Route exact path="/">
            <Personal/>
            <Skill scrollSkills={this.scrollSkills}></Skill>
            <WorkDisplay scrollWork={this.scrollWork}></WorkDisplay>
            <Achievement scrollAchievement={this.scrollAchievement}/>
            <Education scrollEdu={this.scrollEdu}></Education>
            <Contact scrollContact={this.scrollContact}></Contact>
          </Route>
        </Router>
      </>
    )
  }
}

export default App;