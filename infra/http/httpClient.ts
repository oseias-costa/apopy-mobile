import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export async function httpClient(query: string, variables: any) {
  const token = await AsyncStorage.getItem("apopyToken");

  const data = axios({
    url: "https://vast-pear-shrimp-gear.cyclic.app/graphql",
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
