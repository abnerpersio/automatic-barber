import AWS from 'aws-sdk';

AWS.config.update({ region: process.env.AWS_REGION, apiVersion: '2012-11-05' });

export const SQS = new AWS.SQS();
