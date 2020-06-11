import { request, GraphQLClient } from "graphql-request";
import { reqestWitAI } from "./wit/api";

export async function handler(event, context) {
  const requestBody = JSON.parse(event.body);
  const message = requestBody.query;
  const data = await reqestWitAI({
    message,
    token: process.env.WIT_AI_APP_TOKEN,
  });
  console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
