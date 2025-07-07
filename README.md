# Infrastructure as Code với AWS CDK và Advanced Patterns

## Mô tả
Dự án sử dụng AWS Cloud Development Kit (CDK) để triển khai hạ tầng AWS theo mô hình Infrastructure as Code (IaC).  
Bao gồm các kỹ thuật nâng cao như:  
Custom Construct  
Cross-Stack References  
Automated Testing  
Version Control  
Deployment Automation & Rollback  

## Kiến trúc chính
BucketStack: Tạo và quản lý S3 bucket
LambdaApiStack: Gồm Lambda function và API Gateway sử dụng bucket từ stack trên
Custom Construct: Gói Lambda + API Gateway thành component tái sử dụng

## Cách triển khai
1. Cài đặt
git clone https://github.com/<your-username>/<repo-name>.git
cd <project-folder>
npm install
3. Biên dịch TypeScript
npm run build
4. Cấu hình AWS CLI
aws configure
5. Triển khai CDK
cdk deploy --all

## Kiểm thử 
Sử dụng jest để test cấu trúc CDK:
npm test

## Cấu trúc thư mục
├── bin/
│ └── cdk-demo-api.ts # Entry point khởi tạo các Stack
├── lib/
│ ├── bucket-stack.ts # Stack tạo S3 Bucket
│ ├── lambda-api-stack.ts # Stack tạo Lambda + API Gateway
│ └── constructs/
│ └── lambda-with-api.ts # Custom Construct tái sử dụng Lambda + API
├── lambda/
│ └── hello.ts # Lambda handler logic
├── test/
│ ├── cdk-demo-api.test.ts # Unit test cho root stack
│ └── lambda-api-stack.test.ts # Unit test cho Lambda stack
├── package.json # Quản lý dependencies
├── tsconfig.json # TypeScript config
├── jest.config.js # Cấu hình cho Jest testing
└── README.md # Tài liệu mô tả dự án

## Output mẫu
{ "message": "Hello from Lambda!" }

## Các kỹ thuật chính
CDK với TypeScript
Cross-Stack Resource Sharing
Construct tái sử dụng
Jest Unit Testing
S3, Lambda, API Gateway integration

## Mục tiêu
Tự động hóa hạ tầng AWS
Giảm thiểu lỗi manual
Tăng khả năng tái sử dụng và mở rộng
Áp dụng best practice trong DevOps/IaC

## Tác giả
Lâm Huỳnh Hoàng Phúc
CDK Demo Project for DevOps Advanced
