import React, { Component } from 'react'
import portfolio from '../../data/portfolio'

export class Portfolio extends Component {
  render() {
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
                <h1 className="is__title">Project 1</h1>
                <p className="is__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut arcu consequat, dictum magna a, euismod metus. Aliquam ornare metus quis ex egestas tristique. Pellentesque eu velit imperdiet, fermentum felis pulvinar, venenatis ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue quam dolor, ac condimentum est ultricies vitae. Fusce mollis tellus mauris, aliquet convallis nisi facilisis in. Fusce eu leo vestibulum, rutrum arcu id, rutrum elit. Donec finibus pellentesque rhoncus. Fusce convallis non velit ac ultrices. Praesent commodo hendrerit lectus nec efficitur. Vivamus a metus blandit nunc sollicitudin blandit. Nunc sed ante vel risus vulputate elementum quis quis massa. Sed nec viverra ligula. In dolor ex, faucibus at ex eget, elementum venenatis orci.
                </p>
                <p className="is__paragraph">
                Pellentesque eget tempor justo, eget cursus ante. In pulvinar, magna non vehicula sollicitudin, lacus dui lobortis ipsum, quis molestie nibh libero nec justo. Duis tincidunt nunc eu tortor rutrum ultrices auctor et justo. Proin libero justo, lobortis vel dui sit amet, ornare tempus magna. Integer suscipit augue vel tempor tincidunt. Donec orci enim, consectetur at molestie eget, lacinia a massa. Vivamus facilisis mi et augue laoreet varius sed quis tortor. Cras commodo tristique elit sit amet lacinia.
                </p>
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
