const UrlBar = () => {
  return (
    <div className='flex p-1 mt-10 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full'>
      <input className='grow p-1.5 bg-gray-50 focus:outline-none' />
      <button className='inline-flex items-center py-2 px-5 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300'>
        Copy
      </button>
    </div>
  );
};

export default UrlBar;
