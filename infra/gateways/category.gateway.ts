import { httpClient } from "../http/httpClient";
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
  UPDATE_CATEGORY,
} from "../queries/category.query";

export async function fetchCategoryGateway() {
  return await httpClient(GET_CATEGORIES, {});
}

export async function createCategoryGateway(name: string) {
  const variables = {
    categoryInput: { name: name },
  };
  return await httpClient(CREATE_CATEGORY, variables);
}

export async function updateCategoryGateway(id: string, name: string) {
  const variables = {
    categoryEdit: {
      _id: id,
      name: name,
    },
  };
  return await httpClient(UPDATE_CATEGORY, variables);
}

export async function deleteCategoryGateway(id: string) {
  const variables = { categoryEdit: { _id: id } };

  

  return await httpClient(DELETE_CATEGORY, variables);
}
