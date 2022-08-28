import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import type { NextPage } from 'next';
import Image from 'next/image';

interface FilesProps {
  name: string;
  preview: string;
}

const Home: NextPage = () => {
  const [files, setFiles] = useState<FilesProps[]>([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map(file => (
    <div key={file.name}>
      <img
        src={file.preview}
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
    </div>
  ));

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div className='grid h-screen place-items-center'>
      <div className='p-8 max-w-sm text-center bg-white rounded-lg border border-gray-200 shadow-md'>
        <h2 className='mb-3 text-2xl font-normal tracking-tight text-gray-600'>
          Upload your image
        </h2>
        <p className='mb-3 font-light text-sm text-gray-500'>
          File should be Jpeg, Png,...
        </p>

        {files.length === 0 && (
          <div
            {...getRootProps()}
            className='rounded-lg border-2 border-dashed border-blue-200 mt-10 grid gap-10 content-center w-80 h-56 bg-slate-100'
          >
            <input {...getInputProps()} />

            <Image src={'/image.svg'} width={114} height={88} />
            {isDragActive ? (
              <p className='text-gray-400 font-light'>
                Drop the files here ...
              </p>
            ) : (
              <p className='text-gray-400 font-light'>
                Drag &#038; Drop your image here
              </p>
            )}
          </div>
        )}

        {thumbs}

        <p className='my-6 font-light text-gray-500'>Or</p>
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
