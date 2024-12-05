export function DrumKit() {
  return (
    <div className='bg-drum-kit bg-center bg-no-repeat bg-cover min-h-screen flex items-center justify-center'>
      <ul className='flex gap-4'>
        <li className='flex flex-col justify-center items-center'>
          <kbd className='text-white'>A</kbd>
          <span className='text-yellow-500'>CLAP</span>
        </li>
        <li>
          <kbd>S</kbd>
          <span>HIHAT</span>
        </li>
        <li>
          <kbd>D</kbd>
          <span>KICK </span>
        </li>
        <li>
          <kbd>F</kbd>
          <span>OPENHAT</span>
        </li>
        <li>
          <kbd>G</kbd>
          <span>BOOM </span>
        </li>
        <li>
          <kbd>H</kbd>
          <span>RIDE</span>
        </li>
        <li>
          <kbd>J</kbd>
          <span>SNARE</span>
        </li>
        <li>
          <kbd>K</kbd>
          <span>TOM</span>
        </li>
        <li>
          <kbd>L</kbd>
          <span>TINK</span>
        </li>
      </ul>
    </div>
  );
}
