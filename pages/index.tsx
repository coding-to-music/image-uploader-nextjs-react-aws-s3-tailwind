import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='grid h-screen place-items-center text-center'>
      <div className='p-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
        <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
          Upload your image
        </h2>
        <p className='mb-3 font-normal text-gray-700'>
          File should be Jpeg, Png...
        </p>
        <div className='rounded-lg border-2 border-dashed border-blue-200 mt-10 grid gap-10 content-center w-80 h-56 bg-slate-100'>
          <Image src={'/image.svg'} width={114} height={88} />
          <p>Drag &#038; drop your image here</p>
        </div>
        <p className='my-6 font-normal text-gray-700'>Or</p>
        <a
          href='#'
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300'
        >
          Choose a file
        </a>
      </div>
    </div>
  );
};

export default Home;
