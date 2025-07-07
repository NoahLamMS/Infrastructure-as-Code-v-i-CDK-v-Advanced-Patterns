import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class CdkDemoApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 🪣 Tạo S3 bucket
    const bucket = new s3.Bucket(this, 'MyDemoBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // 🔁 Lambda function
    const helloFunction = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler',
      environment: {
        BUCKET_NAME: bucket.bucketName,
      },
    });

    // 🔐 Cho phép Lambda ghi vào S3
    bucket.grantWrite(helloFunction);

    // 🌐 Tạo API Gateway
    new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: helloFunction,
    });
  }
}
