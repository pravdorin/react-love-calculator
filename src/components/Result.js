import React from 'react';
import './Result.css';

const Result = ({ percentage, phrase }) => (
  <div className="result">
    Your compatibility:
    <div className="result-percent">
      { percentage }
      %
    </div>
    <div className="result-phrase">{ phrase }</div>
  </div>
    )

export default Result;
