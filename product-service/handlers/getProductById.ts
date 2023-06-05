import { products } from '../types/types';
import { buildResponse } from '../utils/utils';
// import { APIGatewayProxyEvent, APIGatewayProxyResult } from '@aws-cdk/aws-lambda';

export const handler = async (event: any): Promise<any> => {
  const productId = event.pathParameters?.productId;

  try {
    const product = products.find(product => product.id === productId);

    if (!product) {
      return buildResponse(404, `Product with id: ${productId} not found`);
    }

    return buildResponse(200, product);
  } catch (error: any) {
    return buildResponse(500, error.message);
  }
}