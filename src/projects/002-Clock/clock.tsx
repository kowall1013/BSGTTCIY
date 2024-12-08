import { useEffect, useLayoutEffect, useState } from 'react';
import { cn } from 'utils/cn';
import clsx from 'clsx';

export function Clock() {
  const [hoursRatio, setHoursRatio] = useState(0);
  const [minutesRatio, setMinutesRatio] = useState(0);
  const [secondsRatio, setSecondsRatio] = useState(0);

  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const hourRatio = 360 / 12;
      const minuteRatio = 360 / 60;
      const secondsRatio = 360 / 60;

      setHoursRatio(hourRatio * hours);
      setMinutesRatio(minuteRatio * minutes);
      setSecondsRatio(secondsRatio * seconds);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='w-full h-screen bg-gradient-to-r from-blue-700 to-blue-400'>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-52 h-52 border-8 border-white border-solid border-rad rounded-full relative '>
          <div
            className={clsx(
              'bg-black h-1 absolute w-4/12 left-1/2 top-1/2 origin-[0_0] transition-all'
            )}
            style={{ transform: `rotate(${hoursRatio - 90}deg)` }}
          />
          <div
            className={clsx(
              'bg-black h-1 absolute w-5/12 left-1/2 top-1/2 origin-[0_0] transition-all'
            )}
            style={{ transform: `rotate(${minutesRatio - 90}deg)` }}
          />
          <div
            className={clsx(
              'bg-black h-1 absolute w-6/12 left-1/2 top-1/2 origin-[0_0] transition-all'
            )}
            style={{ transform: `rotate(${secondsRatio - 90}deg)` }}
          />
        </div>
      </div>
    </div>
  );
}
