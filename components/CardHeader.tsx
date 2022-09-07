import { FilesProps } from 'pages';

interface CardHeaderProps {
  files: FilesProps[];
}

const CardHeader = ({ files }: CardHeaderProps) => {
  return (
    <>
      <h2 className='mb-3 text-2xl font-normal tracking-tight text-gray-600'>
        {files.length === 0 ? 'Upload your image' : 'Uploaded Successfully!'}
      </h2>
      {files.length === 0 && (
        <p className='mb-3 font-light text-sm text-gray-500'>
          File should be Jpeg, Png,...
        </p>
      )}
    </>
  );
};

export default CardHeader;
