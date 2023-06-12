import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';

function Education() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className='vertical-timeline-element--education' date='2010-2013' 
                iconStyle={{background:"#3e497a", color: '#fff'}}
                 icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'> 
                    Guru Nanak Dev University, India</h3>
                    <p>Bachelor in Computer Application</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' date='2013-2016' 
                iconStyle={{background:"#3e497a", color: '#fff'}}
                 icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'> 
                    Guru Nanak Dev University, India</h3>
                    <p>Masters in Computer Application</p>

                </VerticalTimelineElement>

                
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2020' 
                iconStyle={{background:"#3e497a", color: '#fff'}}
                 icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'> 
                    Homles Insititute Brisbane, Australia</h3>
                    <p>Masters in Bussiness & Accounting(MBA+MPA)</p>

                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
export default Education;