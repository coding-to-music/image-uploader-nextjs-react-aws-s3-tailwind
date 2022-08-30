import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import type { NextPage } from 'next';

import CheckIcon from 'components/CheckIcon';
import UploadBar from 'components/UploadBar';
import CardHeader from 'components/CardHeader';
import UrlBar from 'components/UrlBar';
import FileUpload from 'components/FileUpload';

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
            <FileUpload
              getRootProps={getRootProps}
              getInputProps={getInputProps}
              open={open}
              isDragActive={isDragActive}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
