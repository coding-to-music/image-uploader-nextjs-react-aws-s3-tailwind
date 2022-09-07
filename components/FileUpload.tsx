import Image from 'next/image';
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';

interface FileUploadProps {
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
  open: () => void;
  isDragActive: boolean;
}

const FileUpload = ({
  getRootProps,
  getInputProps,
  open,
  isDragActive,
}: FileUploadProps) => {
  return (
    <>
      <div
        {...getRootProps()}
        className='w-80 h-56 rounded-lg border-2 border-dashed border-blue-200 mt-10 grid gap-10 content-center bg-slate-100'
      >
        <input {...getInputProps()} />

        <Image priority src={'/image.svg'} width={114} height={88} />
        {isDragActive ? (
          <p className='text-gray-400 font-light'>Drop the files here ...</p>
        ) : (
          <p className='text-gray-400 font-light'>
            Drag &#038; Drop your image here
          </p>
        )}
      </div>

      <p className='my-6 font-light text-gray-500'>Or</p>
      <button
        onClick={open}
        className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none'
      >
        Choose a file
      </button>
    </>
  );
};

export default FileUpload;
