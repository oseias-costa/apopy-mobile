import axios from "axios";

export async function httpClient(query: string, variables: any) {
  const token: string | null = localStorage.getItem("apopyToken");

  const data = axios({
    url: "https://apopy-api.onrender.com/graphql",
    method: "post",
    data: {
      query: `${query}`,
      variables: variables,
    },
    headers: {
      Authorization: token ? JSON.parse(token) : null,
    },
  });

  return data;
}
