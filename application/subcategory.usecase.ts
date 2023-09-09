import { AxiosResponse } from "axios";
import { 
  createSubcategoryGateway, 
  deleteSubcategoryGateway, 
  updateSubcategoryGateway 
} from "../infra/gateways/subcategory.gateway";

export async function updateSubcategoryUseCase(newSubcategory: string, category: string, subcatogory: string): 
  Promise<AxiosResponse> {
    return await updateSubcategoryGateway(newSubcategory, category, subcatogory);
}

export async function createSubcategoryUseCase(categoryId: string, subcategory: string): 
  Promise<AxiosResponse> {
    return await createSubcategoryGateway(categoryId, subcategory);
}

export async function deleteSubcategoryUseCase(categoryId: string, subcategory: string): 
  Promise<AxiosResponse> {
    return await deleteSubcategoryGateway(categoryId, subcategory);
}
