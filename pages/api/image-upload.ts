import { NextApiRequest, NextApiResponse } from "next";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import * as dotenv from "dotenv";
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const myregion = process.env.APP_AWS_REGION;
  const myaccessKeyId = process.env.APP_AWS_ACCESS_KEY;
  const mysecretAccessKey = process.env.APP_AWS_SECRET_KEY;
  const mybucket = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;

  console.log("accessKeyId: ", myaccessKeyId)
  console.log("secretAccessKey: ", mysecretAccessKey)
  console.log("region: ", myregion)
  console.log("bucket: ", mybucket)

  const Conditions = [{ acl: "public-read" }, { bucket: mybucket }, ["starts-with", "something", "user/eric/"]];

  const mycredentials = {
    accessKeyId: myaccessKeyId,
    secretAccessKey: mysecretAccessKey,
  }

  const config = {
    region: myregion,
    credentials: mycredentials
    };


  try {
    const client = new S3Client(config);
    const Bucket = mybucket;
    const Key = mysecretAccessKey;
    const Fields = {
          acl: "public-read",
          };

    const { url, fields } = await createPresignedPost(s3Client, {
      Bucket,
      Key,
      Conditions,
      Fields,
      Expires: 600, //Seconds before the presigned post expires. 3600 by default.
    });
    
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return;
  }
};

export default handler;