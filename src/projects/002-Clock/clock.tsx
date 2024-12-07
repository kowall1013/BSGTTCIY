import { useEffect, useState } from 'react';
import { cn } from 'utils/cn';
import clsx from 'clsx';

export function Clock() {
  const [hoursAsPercentage, setHoursAsPercentage] = useState(0);
  const [minutesAsPercentage, setMinutesAsPercentage] = useState(0);
  const [secondsAsPercentage, setSecondsAsPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      console.log('minutes', minutes);
      console.log('(minutes / 60) * 360', (minutes / 60) * 360);

      const hoursPercentage = (hours / 24) * 360;
      const minutesPercentage = (minutes / 60) * 360;
      const secondsPercentage = (seconds / 60) * 360;

      setHoursAsPercentage(hoursPercentage);
      setMinutesAsPercentage(minutesPercentage);
      setSecondsAsPercentage(secondsPercentage);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //   0 6 12 18 24 36

  return (
    <div className='w-full h-screen bg-gradient-to-r from-blue-700 to-blue-400'>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-52 h-52 border-8 border-white border-solid border-rad rounded-full relative'>
          <div
            className={clsx(
              `bg-black h-1 absolute w-4/12 left-1/2 top-1/2 origin-left ] `
            )}
            style={{ transform: `rotate(${18}deg)` }}
          />
          <div
            className={`bg-black h-1 absolute w-5/12 left-1/2 top-1/2 origin-left `}
            style={{ transform: `rotate(${0}deg)` }}
          />
          <div
            className={`bg-black h-1 absolute w-6/12 left-1/2 top-1/2 origin-left `}
            style={{ transform: `rotate(${0}deg)` }}
          />
        </div>
      </div>
    </div>
  );
}
