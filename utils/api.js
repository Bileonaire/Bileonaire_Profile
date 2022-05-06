import axios from "axios";

const backendURL = "http://localhost:8080/api/v1";

export default async function apiCall(method, endpoint, data = {}, token) {
  const api = axios.create({
    baseURL: backendURL,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
  let response;

  try {
    if (method === "post") response = await api.post(endpoint, data);
    if (method === "get") response = await api.get(endpoint);
    if (method === "put") response = await api.put(endpoint, data);
    if (method === "delete") response = await api.delete(endpoint);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
