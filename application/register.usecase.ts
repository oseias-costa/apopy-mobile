import { RegisterUser } from "../domain/user";
import {
  deleteMyAccountGateway,
  registerGateway,
} from "../infra/gateways/user.gateway";

export async function registerUseCase({
  name,
  email,
  password,
  phone,
}: RegisterUser) {
  return await registerGateway({ name, email, password, phone });
}

export async function deleteMyAccountUseCase() {
  return await deleteMyAccountGateway();
}
