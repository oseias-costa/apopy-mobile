import { RegisterUser } from "../../domain/entities/user";
import { httpClient } from "../http/httpClient";
import { DELETE_USER, REGISTER, USER } from "../queries/user.query";

export async function registerGateway({
  name,
  email,
  password,
  phone,
}: RegisterUser) {
  const variables = {
    registerInput: {
      name: name,
      email: email,
      password: password,
      phone: phone,
    },
  };

  return await httpClient(REGISTER, variables);
}

export async function userGateway() {
  return httpClient(USER, {});
}

export async function deleteMyAccountGateway() {
  return httpClient(DELETE_USER, {});
}
