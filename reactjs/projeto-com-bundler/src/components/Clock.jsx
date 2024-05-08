import { useEffect, useState } from 'react';

const Clock = (props) => {
  const [currentDate, setCurrentDate] = useState(props.startDate);

  // useEffect sem dependências é executado apenas no mount e unmount
  useEffect(() => {
    // mount
    const interval = setInterval(() => {
      setCurrentDate((previousDate) => {
        return new Date(previousDate.getTime() + 1000);
      });
    }, 1000);
    return () => {
      // unmount
      clearInterval(interval);
    }
  }, [/* sem dependências */]);

  return (
    <div>
      Hora atual: {currentDate.toLocaleString()}
    </div>
  )
};

export default Clock;
