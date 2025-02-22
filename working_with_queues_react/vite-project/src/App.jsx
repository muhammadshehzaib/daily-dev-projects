import React, { useState, useEffect } from 'react';

const QueueExample = () => {
  const [queue, setQueue] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addToQueue = (task) => {
    setQueue((prevQueue) => [...prevQueue, task]);
  };

  const processQueue = async () => {
    if (queue.length === 0) return;
    
    setIsProcessing(true);

    const task = queue[0];

    await task();

    setQueue((prevQueue) => prevQueue.slice(1));

    setIsProcessing(false);
  };

  useEffect(() => {
    if (!isProcessing && queue.length > 0) {
      processQueue();
    }
  }, [queue, isProcessing]);

  const task1 = async () => {
    console.log('Processing Task 1');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Task 1 Complete');
  };
  
  const task2 = async () => {
    console.log('Processing Task 2');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Task 2 Complete');
  };
  return (
    <div>
      <h2>Queue Example</h2>
      <button onClick={() => addToQueue(task1)}>Add Task 1</button>
      <button onClick={() => addToQueue(task2)}>Add Task 2</button>
      <p>Queue Length: {queue.length}</p>
    </div>
  );
};

export default QueueExample;
