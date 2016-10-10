import React from 'react';

const CPULoad = () => {
    return (
        <div className="info-box">
            <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline"></i></span>
            <div className="info-box-content">
              <span className="info-box-text">CPU Traffic</span>
              <span className="info-box-number">90<small>%</small></span>
            </div>
        </div>
    );
}

export default CPULoad;