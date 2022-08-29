import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import type { NextPage } from 'next';
import Image from 'next/image';

import CheckIcon from 'components/CheckIcon';
import UploadBar from 'components/UploadBar';
import CardHeader from 'components/CardHeader';
import UrlBar from 'components/UrlBar';

export interface FilesProps {
  name: string;
  preview: string;
}

const Home: NextPage = () => {
  const [files, setFiles] = useState<FilesProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    noClick: true,
    accept: {
      'image/*': [],
    },
    onDrop: acceptedFiles => {
      setIsLoading(true);

      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      setIsLoading(false);
    },
  });

  const thumbs = files.map(file => (
    <div className='mt-10' key={file.name}>
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
    // Revoke data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div className='grid h-screen place-items-center'>
      {isLoading ? (
        <UploadBar />
      ) : (
        <div className='p-8 max-w-sm text-center bg-white rounded-lg border border-gray-200 shadow-md'>
          {files.length !== 0 && !isLoading && <CheckIcon />}

          <CardHeader files={files} />

          {thumbs}

          {files.length !== 0 && <UrlBar />}

          {files.length === 0 && (
            <>
              <div
                {...getRootProps()}
                className='w-80 h-56 rounded-lg border-2 border-dashed border-blue-200 mt-10 grid gap-10 content-center bg-slate-100'
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

              <p className='my-6 font-light text-gray-500'>Or</p>
              <button
                onClick={open}
                className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300'
              >
                Choose a file
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
