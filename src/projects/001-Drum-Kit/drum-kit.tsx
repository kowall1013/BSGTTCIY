import { useEffect, useState } from 'react';
import { cn } from 'utils/cn';

const data = [
  { id: 0, key: 'A', label: 'CLAP' },
  { id: 1, key: 'S', label: 'HIHAT' },
  { id: 2, key: 'D', label: 'KICK' },
  { id: 3, key: 'F', label: 'OPENHAT' },
  { id: 4, key: 'G', label: 'BOOM' },
  { id: 5, key: 'H', label: 'RIDE' },
  { id: 6, key: 'J', label: 'SNARE' },
  { id: 7, key: 'K', label: 'TOM' },
  { id: 8, key: 'L', label: 'TINK' },
];

//Think how can I play audio without controls

export function DrumKit() {
  const [activeKey, setActiveKey] = useState('');

  const handleKeyDown = (e: KeyboardEvent) => {
    setActiveKey(e.key.toUpperCase());
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    setActiveKey('');
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyDown);
    };
  }, []);

  return (
    <div className='bg-drum-kit bg-center bg-no-repeat bg-cover min-h-screen flex items-center justify-center '>
      <ul className='flex gap-4'>
        {data.map((element) => (
          <li
            key={element.id}
            className={cn(
              'flex flex-col justify-center items-center bg-black/30 w-20 px-2 py-2 border-4 border-black border-solid transition-transform',
              activeKey === element.key && 'border-yellow-400 scale-110'
            )}
          >
            <kbd className='text-white'>{element.key}</kbd>
            <span className='text-yellow-500 '>{element.label}</span>
          </li>
        ))}
      </ul>

      <audio id='boom'>
        <source src='/sounds/boom.wav' type='audio/wav' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
