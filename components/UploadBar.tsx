const UploadBar = () => {
  return (
    <div className='p-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
      <h2 className='mb-3 text-2xl font-normal tracking-tight text-gray-600'>
        Uploading...
      </h2>

      <progress className='progress progress-info bg-slate-100 w-80'></progress>
    </div>
  );
};

export default UploadBar;
