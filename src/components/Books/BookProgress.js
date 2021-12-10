import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const BookProgress = () => (
  <div className="progress-container">
    <div className="progress-bar">
      <CircularProgressbar
        value={75}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: 'butt',
          pathTransitionDuration: 0.5,
          pathColor: `rgba(2, 145, 255, ${75 / 100})`,
          trailColor: '#d6d6d6',
          backgroundColor: '#0290ff',
        })}
      />
    </div>

    <div className="progress-value">
      <strong>75%</strong>
      <span className="faded-black completed">completed</span>
    </div>

    <div className="progress-update">
      <h4 className="faded-black">Current Chapter</h4>
      <p>Chapter 17</p>
      <button type="button" className="btn btn-primary btn-submit">
        Update Progress
      </button>
    </div>
  </div>
);

export default BookProgress;
