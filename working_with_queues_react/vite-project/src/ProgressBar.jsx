import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          console.log("prev : ",prev)
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 50);
    
  }, []);



  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>
        <span className="progress-text">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
