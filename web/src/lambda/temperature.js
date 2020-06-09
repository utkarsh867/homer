import { request, GraphQLClient } from "graphql-request";
import { reqestWitAI } from "./wit/api";

export async function handler(event, context) {
  const data = await reqestWitAI({
    message: "What%27s%20the%20temperature%20today%3F",
    token: process.env.WIT_AI_APP_TOKEN,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
