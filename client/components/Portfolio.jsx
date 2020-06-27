import React, { Component } from 'react'
import portfolio from '../../data/portfolio'

export class Portfolio extends Component {
  render() {
    const article = (data) => {
      switch (data.id){
        case 1:
          return(
            <React.Fragment>
              <p className="is__paragraph">
                This is our first group project at DEV Academy during the COVID-19 lockdown. 
                At the beginning of the week, we learned new concept of building a website by using <b>HandlebarsJS</b>. Our team included myself, Alice, Josh and Kevin, we came up with the idea to build a simple website where people can use to share great Youtube video that can help to entertain others with lockdown situation. 
                My role of the project was a <b>"Lead Developer"</b>. I was responsible for setting up the <b>Github repo</b>, prepare some basic <b>NPM packages</b> and create some templates for the team. I also took care for almost the styling of the page by using <b>CSS</b> and <b>Animate.CSS</b> to handle animation.
              </p>
              <p className="is__paragraph">
                As this is our first remote group project, we have realized that we were lack of communication during the process.
                We didn't have any stand
              </p>
            </React.Fragment>
          );
        case 2:
          return(
            <p className="is__paragraph">
              hello 2
            </p>
          );
        case 3:
          return(
            <p className="is__paragraph">
              hello 3
            </p>
          );
        case 4:
          return(
            <p className="is__paragraph">
              hello 4
            </p>
          );
        default:
          return true;
      }
    }
    const portfolioClass = "portfolio";
    const panel = "panel";
    return(
      portfolio.map(project => {
        return (
          <div key={project.id} className={portfolioClass}>
            <div className={`${portfolioClass}__card`}>
              <div className={`${portfolioClass}__project`}>
                <iframe src={project.url} height="90%" width="100%"></iframe>
              </div>
              <div className={`${portfolioClass}__article`}>
                <div className={`${portfolioClass}__article__body`}>
                  <h1 className="is__title">{project.name}</h1>
                  {article(project)}
                </div>
                <div className={panel}>
                  <div className={`${panel}__left`}>
                    <h2 className="is__subtitle">Technologies</h2>
                  </div>
                  <div className={`${panel}__right`}>
                    <h2 className="is__subtitle">Personal</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
  }
}

export default Portfolio
