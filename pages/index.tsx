import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import CheckIcon from "components/CheckIcon";
import UploadBar from "components/UploadBar";
import CardHeader from "components/CardHeader";
import UrlBar from "components/UrlBar";
import FileUpload from "components/FileUpload";
import Image from "next/image";
// import * as dotenv from "dotenv";
// dotenv.config();

export interface FilesProps {
  name: string;
  preview: string;
}

const Home: NextPage = () => {
  const [files, setFiles] = useState<FilesProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const uploadPhoto = async (image: File) => {
    const file = image;
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/image-upload?file=${filename}`);
    const data = await res.json();
    const formData = new FormData();

    formData.append("Content-Type", file.type);

    Object.entries({ ...data.fields, file }).forEach(([key, value]) => {
      // @ts-ignore
      formData.append(key, value);
    });

    await fetch(data.url, {
      method: "POST",
      body: formData,
    });

    setUploadedImageUrl(
      `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${filename}`
    );
  };

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    noClick: true,
    accept: {
      "image/*": [],
    },
    onDrop: async (acceptedFiles) => {
      setIsLoading(true);

      await uploadPhoto(acceptedFiles[0]);

      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      setIsLoading(false);
    },
  });

  const thumbs = files.map((file) => (
    <div className="mt-10" key={file.name}>
      <Image
        src={file.preview}
        alt=""
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
    </div>
  ));

  useEffect(() => {
    // Revoke data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div className="grid h-screen place-items-center">
      {isLoading ? (
        <UploadBar />
      ) : (
        <div className="p-8 max-w-sm text-center bg-white rounded-lg border border-gray-200 shadow-md">
          {files.length !== 0 && !isLoading && <CheckIcon />}

          <CardHeader files={files} />

          {thumbs[0]}

          {files.length !== 0 && <UrlBar uploadedImageUrl={uploadedImageUrl} />}

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
