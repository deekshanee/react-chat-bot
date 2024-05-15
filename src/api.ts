import axios from "axios";
export const API_HOST =
  "https://3qxi9k9ud6.execute-api.us-east-1.amazonaws.com/dev";

export const getConversationIds = async () => {
  try {
    const headers = {
      "X-API-Key": process.env.REACT_APP_API_KEY,
    };
    const response = await axios.post(
      `${API_HOST}/userSessions`,
      {
        UserId: "ssahoo",
      },
      {
        headers,
      }
    );
    if (response.data.statusCode === 200) {
      console.log(response.data.data);
      return response.data.data;
    } else {
      return [];
    }
  } catch {
    return [];
  }
};
