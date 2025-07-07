import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as s3 from 'aws-cdk-lib/aws-s3';

interface LambdaWithApiProps {
  bucket: s3.IBucket;
}

export class LambdaWithApi extends Construct {
  public readonly api: apigateway.LambdaRestApi;
  public readonly lambdaFn: lambda.Function;

  constructor(scope: Construct, id: string, props: LambdaWithApiProps) {
    super(scope, id);

    this.lambdaFn = new lambda.Function(this, 'MyLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler',
      environment: {
        BUCKET_NAME: props.bucket.bucketName,
      },
    });

    // ✅ Tạo phiên bản hiện tại của Lambda
    const version = this.lambdaFn.currentVersion;

    // ✅ (Tuỳ chọn) Alias trỏ vào version hiện tại (giúp rollback nếu cần)
    new lambda.Alias(this, 'MyLambdaAlias', {
    aliasName: 'live',
    version,
    });
    
    // 👇 Cấp quyền ghi vào S3 cho Lambda
    props.bucket.grantWrite(this.lambdaFn);

    this.api = new apigateway.LambdaRestApi(this, 'MyApiGateway', {
      handler: this.lambdaFn,
    });
  }
}
