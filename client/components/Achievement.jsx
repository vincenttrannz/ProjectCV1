import React, { Component } from 'react'
import {achievement} from '../../data/achievement'

export class Achievement extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
        <span ref={this.props.scrollAchievement} className="breaker">
          <h2 data-aos="fade-down" data-aos-duration="500">WORK ACHIEVEMENT</h2>
        </span>
        <div className="workdiv"
        >
         <section className='work'>
            {achievement.map((item) =>{
              return(
                <table data-aos={(item.id === 1) ? "zoom-in-right" : "zoom-in-left"} data-aos-duration="800" key={item.id} className='achievement'>
                  <tbody>
                    <tr>
                      <th><strong>"{item.name}"</strong></th>
                    </tr>
                    <tr>
                      <td>
                        <iframe src={item.url}></iframe>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )
            })}
         </section>
        </div>
      </>
    )
  }
}

export default Achievement
