import { useRef, useState } from 'react';

const UrlBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  return (
    <div className='flex p-1 mt-10 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full'>
      <input
        type='text'
        className='grow p-1.5 bg-gray-50 focus:outline-none'
        ref={inputRef}
      />
      <button
        onClick={() => {
          if (
            inputRef.current?.value !== undefined &&
            inputRef.current?.value.trim() !== ''
          ) {
            navigator.clipboard.writeText(inputRef.current?.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          }
        }}
        className='inline-flex items-center py-2 px-5 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none'
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

export default UrlBar;
