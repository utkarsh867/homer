import axios from "axios";

export const reqestWitAI = async ({ message, token }) => {
  const URI = `https://api.wit.ai/message?v=20200610&q=${message}`;
  const { data } = await axios.get(URI, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return data;
};
