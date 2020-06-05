import React from 'react';

const Result = ({ percentage, phrase }) => (
  <div>
    <div>
      Your compatibility:
      {percentage}
    </div>
    <h1>{phrase}</h1>
  </div>
    )

export default Result;
