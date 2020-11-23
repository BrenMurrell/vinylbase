const AWS = require('aws-sdk');
const fs = require('fs')
require('dotenv').config()


// Enter copied or downloaded access ID and secret key here
const ID = process.env.AWS_ACCESS_KEY_ID;
const SECRET = process.env.AWS_SECRET_ACCESS_KEY;

// The name of the bucket that you have created
const BUCKET_NAME = 'vinylbase';

// AWSAccessKeyId=AKIAJJEHMV6PVHHS5UMA
// AWSSecretKey=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

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

const uploadFile = (fileName) => {
  // Read content from the file
  const fileContent = fs.readFileSync(fileName);

  // Setting up S3 upload parameters
  const params = {
      Bucket: BUCKET_NAME,
      Key: 'images/cat3.jpg', // File name you want to save as in S3
      Body: fileContent,
      ACL:'public-read'
  };

  // Uploading files to the bucket
  s3.upload(params, function(err, data) {
      if (err) {
          throw err;
      }
      console.log(`File uploaded successfully. ${data.Location}`);
  });
};

uploadFile('public/images/1.jpg')