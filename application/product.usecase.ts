import { Product } from "../domain/product";
import {
  createProductGateway,
  deleteProductGateway,
  getProductGateway,
  updateProductGateway,
} from "../infra/gateways/product.gateway";

export async function getProductsUseCase() {
  return await getProductGateway();
}

export async function createProductUseCase({
  name, category, subcategory, suplier }: Omit<Product, "_id">) {

  return await createProductGateway({ name, category, subcategory, suplier });
}

export async function updateProductUseCase({
  _id,
  name,
  category,
  subcategory,
  suplier,
}: Product) {
  return await updateProductGateway({
    _id,
    name,
    category,
    subcategory,
    suplier
  });
}

export async function deleteProductUseCase(id: string){
  return await deleteProductGateway(id)
}
