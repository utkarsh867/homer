import axios from "axios";

export const reqestWitAI = async ({ message, token }) => {
  const URI = `https://api.wit.ai/message?v=20200513&q=${message}`;
  const { data } = await axios.get(URI, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  console.log(data);
  return data;
};
