import React from 'react';

export const TimeLine = () => {
  return (
    <>
        <div id="timeline-wrap">
            <div id="timeline"></div>
        
            <div className="marker mfirst timeline-icon one">
                <i className="fa-solid fa-apple-whole fa-lg"></i>
            </div>
            <div className="marker m2 timeline-icon two">
                <i className="fa-solid fa-heart-circle-plus fa-lg"></i>
            </div>
            
            <div className="marker m3 timeline-icon three">
                <i className="fa-solid fa-carrot fa-lg"></i>
            </div>

            <div className="marker mlast timeline-icon four">
                <i className="fa-solid fa-calendar-days fa-lg"></i>
            </div>
        </div>
    </>
  )
}
