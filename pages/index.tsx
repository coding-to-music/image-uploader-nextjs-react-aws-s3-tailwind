import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='grid h-screen place-items-center text-center'>
      <div className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
        <a href='#'>
          <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
            Upload your image
          </h2>
        </a>
        <p className='mb-3 font-normal text-gray-700'>
          File should be Jpeg, Png...
        </p>
        <p className='mb-3 font-normal text-gray-700'>Or</p>
        <a
          href='#'
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
        >
          Choose a file
        </a>
      </div>
    </div>
  );
};

export default Home;
