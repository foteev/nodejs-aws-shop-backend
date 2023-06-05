import { products } from '../types/types';
import { buildResponse } from '../utils/utils';
// import { APIGatewayProxyEvent, APIGatewayProxyResult } from '@aws-cdk/aws-lambda';

export const handler = async (event: any): Promise<any> => {
  try {
    return buildResponse(200, products);
  } catch (error: any) {
    return buildResponse(500, error.message);
  }
}