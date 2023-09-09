import { httpClient } from "../http/httpClient";
import { CREATE_SUBCATEGORY, DELETE_SUBCATEGORY, UPDATE_SUBCATEGORY } from "../queries/subcategory.query";

export async function updateSubcategoryGateway(
  newSubcategory: string,
  category: string,
  subcategory: string
) {
  const variables = {
    subcategoryEdit: {
      newName: newSubcategory,
      name: subcategory,
      category: category,
    },
  };

  return await httpClient(UPDATE_SUBCATEGORY, variables);
}

export async function createSubcategoryGateway(categoryId: string, subcategory: string) {
  const variables = {
    subcategoryInput: {
      name: subcategory,
      category: categoryId,
    }
  }

  return await httpClient(CREATE_SUBCATEGORY, variables);
}

export async function deleteSubcategoryGateway(categoryId: string, subcategory: string) {
  const variables = {
    subcategoryEdit: {
      name: subcategory,
      category: categoryId,
    },
  }

  return await httpClient(DELETE_SUBCATEGORY, variables);
}
