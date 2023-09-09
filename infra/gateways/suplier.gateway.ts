import { httpClient } from "../http/httpClient";
import { CREATE_SUPLIER, DELETE_SUPLIER, GET_SUPLIERS, UPDATE_SUPLIER } from "../queries/suplier.query";

export const getSupliersGateway = async () => {
  return await httpClient(GET_SUPLIERS, {})
};

export async function createSuplierGateway({ name }: { name: string }) {

  const variables = {
        suplierInput: {
          name: name,
        }
  }
  return await httpClient(CREATE_SUPLIER, variables) 
}

export async function updateSuplierGateway(
  { _id, name }: { _id: string; name: string }) {

  const variables = {
        suplierInput: {
          _id: _id,
          name: name
        }
    }
  return await httpClient(UPDATE_SUPLIER, variables)
}

export async function deleteSuplierGateway(id: string) {
  const variables = { id: id }

  return await httpClient(DELETE_SUPLIER, variables)
}
