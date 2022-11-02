import { NextApiRequest, NextApiResponse } from "next";
import aws from "aws-sdk";
import * as dotenv from "dotenv";
dotenv.config();

// console.log("accessKeyId: ", process.env.APP_AWS_ACCESS_KEY)
// console.log("secretAccessKey: ", process.env.APP_AWS_SECRET_KEY)
// console.log("region: ", process.env.APP_AWS_REGION)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const myregion = process.env.APP_AWS_REGION;
  const myaccessKeyId = process.env.APP_AWS_ACCESS_KEY;
  const mysecretAccessKey =process.env.APP_AWS_SECRET_KEY;

  console.log("accessKeyId: ", myaccessKeyId)
  console.log("secretAccessKey: ", mysecretAccessKey)
  console.log("region: ", myregion)

  try {
    const s3 = new aws.S3({
      region: myregion,
      accessKeyId: myaccessKeyId,
      secretAccessKey: mysecretAccessKey,
    });

    aws.config.update({
      region: myregion,
      accessKeyId: myaccessKeyId,
      secretAccessKey: mysecretAccessKey,
      signatureVersion: "v4",
    });

    // console.log("accessKeyId: ", process.env.APP_AWS_ACCESS_KEY)
    // console.log("secretAccessKey: ", process.env.APP_AWS_SECRET_KEY)
    // console.log("region: ", process.env.APP_AWS_REGION)
        
    const post = await s3.createPresignedPost({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Fields: {
        key: req.query.file,
      },
      Expires: 60, // seconds
      Conditions: [
        ["content-length-range", 0, 5048576], // up to 5 MB
        ["starts-with", "$Content-Type", "image/"],
      ],
    });

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return;
  }
};

export default handler;
