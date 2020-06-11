import { request, GraphQLClient } from "graphql-request";

export async function handler(event, context) {
  const GET_DEVICES = `
    query devices($id: ID!) {
      findDeviceByID(id: $id) {
        name
      }
    }
  `;

  const client = new GraphQLClient("https://graphql.fauna.com/graphql", {
    headers: {
      authorization: `Bearer ${process.env.DATABASE_KEY}`,
    },
  });

  try {
    const response = await client.request(GET_DEVICES, { id: 1 });
    console.log(response);
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "DONWWW" }),
  };
}
