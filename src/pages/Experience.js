import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';


import WorkIcon from '@material-ui/icons/Work';
function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor="#3e497a">
                
                

                
                <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016-2017"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
             Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            RD Motors Pty. Ltd. Beaudesert, QLD (4285)
          </h4>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022-Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Marksys Pvt. Ltd., India.
          </h4>
          
        </VerticalTimelineElement>
        
            </VerticalTimeline>
        </div>
    )
}
export default Experience;