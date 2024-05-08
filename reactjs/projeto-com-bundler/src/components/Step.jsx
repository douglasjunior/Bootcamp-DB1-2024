import { useEffect, useState } from 'react';

const useDidMount = (callback) => useEffect(callback, []);

const Step = () => {
  const [step, setStep] = useState(0);
  
  useDidMount(() => {
    console.log('Mount: ', step);
    return () => {
      console.log('Unmount: ', step);
    }
  });

  useEffect(() => {
    console.log('Setup: ', step);
    if (step === 10) {
      alert('Chegou no 10!');
    }
    return () => {
      console.log('Cleaning: ', step);
    }
  }, [step]);

  const handleDecrement = () => {
    setStep(step - 1);
  }
  const handleIncrement = () => {
    setStep(step + 1);
  }
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>Step: {step}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
};

export default Step;
