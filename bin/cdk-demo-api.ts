#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BucketStack } from '../lib/bucket-stack';
import { LambdaApiStack } from '../lib/lambda-api-stack';

const app = new cdk.App();

// Tạo bucket stack
const bucketStack = new BucketStack(app, 'BucketStack');

// Tạo lambda + api stack, truyền bucket từ bucketStack sang lambda
new LambdaApiStack(app, 'LambdaApiStack', {
  bucket: bucketStack.bucket,
});
