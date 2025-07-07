import { LambdaWithApi } from './constructs/lambda-with-api';
import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

interface LambdaApiStackProps extends StackProps {
  bucket: s3.IBucket;
}

export class LambdaApiStack extends Stack {
  constructor(scope: Construct, id: string, props: LambdaApiStackProps) {
    super(scope, id, props);

    new LambdaWithApi(this, 'LambdaWithApi', {
      bucket: props.bucket,
    });
  }
}
