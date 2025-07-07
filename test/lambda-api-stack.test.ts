import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LambdaApiStack } from '../lib/lambda-api-stack';
import { BucketStack } from '../lib/bucket-stack';
//file này kiểm tra xem Lambda function và API Gateway có được tạo ra đúng hay không
test('Lambda function và API Gateway được tạo', () => {
  const app = new cdk.App();

  const bucketStack = new BucketStack(app, 'TestBucketStack');
  const lambdaStack = new LambdaApiStack(app, 'TestLambdaApiStack', {
    bucket: bucketStack.bucket,
  });

  const template = Template.fromStack(lambdaStack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'hello.handler',
    Runtime: 'nodejs18.x',
  });

  template.resourceCountIs('AWS::ApiGateway::RestApi', 1);
});
