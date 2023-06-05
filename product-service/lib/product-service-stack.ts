import * as cdk from 'aws-cdk-lib';
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from 'constructs';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as apiGateway from "@aws-cdk/aws-apigatewayv2-alpha";
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';



// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ProductServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaProps: NodejsFunctionProps = {
      environment: {},
      runtime: lambda.Runtime.NODEJS_18_X,
      bundling: {
        externalModules: ["aws-sdk"]
      }
    };

    const api = new apiGateway.HttpApi(this, 'ProductServiceApi');

    const getProductsIntegration = new HttpLambdaIntegration(
      "getProductsIntegration",
      new NodejsFunction(
        this,
        "getProductsListFunction",
        {
          entry: "handlers/getProductsList.ts",
          ...lambdaProps
        }
      )
    );

    const getProductByIdIntegration = new HttpLambdaIntegration(
      "getProductByIdIntegration",
      new NodejsFunction(
        this,
        "getProductByIdFunction",
        {
          entry: "handlers/getProductById.ts",
          ...lambdaProps
        }
      )
    );

    api.addRoutes(
        {
          path: "/products",
          methods: [apiGateway.HttpMethod.GET],
          integration: getProductsIntegration
        }
    )
    api.addRoutes(
      {
        path: "/products/{productId}",
        methods: [apiGateway.HttpMethod.GET],
        integration: getProductByIdIntegration
      }
    )
  }
}
