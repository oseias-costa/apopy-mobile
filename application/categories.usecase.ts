import { AxiosResponse } from "axios";
import {
  createCategoryGateway,
  deleteCategoryGateway,
  fetchCategoryGateway,
  updateCategoryGateway,
} from "../infra/gateways/category.gateway";

export async function getCategoriesUseCase(): Promise<AxiosResponse> {
  return await fetchCategoryGateway();
}

export async function createCategoryUseCase(name: string): Promise<AxiosResponse> {
  return await createCategoryGateway(name);
}

export async function updateCategoryUseCase(id: string, name: string): Promise<AxiosResponse> {
  return await updateCategoryGateway(id, name);
}

export async function deleteCategoryUseCase(id: string) {
  return await deleteCategoryGateway(id);
}
