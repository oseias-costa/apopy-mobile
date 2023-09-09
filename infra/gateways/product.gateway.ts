import { Product, ProductCreate } from "../../domain/entities/product";
import { httpClient } from "../http/httpClient";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS, UPDATE_PRODUCT } from "../queries/product.query";

export const getProductGateway = async () => {
  return await httpClient(GET_PRODUCTS, {});
};

export const createProductGateway = async ({
  name, category, subcategory, suplier,
}: ProductCreate) => {

  const variables = {
    productInput: {
      name,
      category,
      subcategory,
      suplier,
    },
  };

  return await httpClient(CREATE_PRODUCT, variables);
};

export const updateProductGateway = async ({
  _id, name, category, subcategory, suplier,
}: Product) => {
  
  const variables = {
    productEdit: {
      _id,
      name,
      category,
      subcategory,
      suplier,
    },
  };

  return await httpClient(UPDATE_PRODUCT, variables);
};

export async function deleteProductGateway(id: string){
  const variables = {
      id: id
  }

  return await httpClient(DELETE_PRODUCT, variables)
}