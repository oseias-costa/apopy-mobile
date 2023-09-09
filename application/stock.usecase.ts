import { AxiosResponse } from "axios";
import { Stock } from "../domain/stock";
import {
  createStockItemGateway,
  deleteStockItemGateway,
  getStockGateway,
  updateStockItemGateway,
} from "../infra/gateways/stock.gateway";

export async function getStockUseCase(): Promise<AxiosResponse<Stock[]>> {
  return await getStockGateway();
}

export async function createStockUseCase(
  data: Stock
): Promise<AxiosResponse> {
  return await createStockItemGateway(data);
}

export async function updateStockUseCase(
  data: Stock
): Promise<AxiosResponse>{

  return await updateStockItemGateway(data)
}

export async function deleteStockUseCase(id: string)
: Promise<AxiosResponse>{
  
  return await deleteStockItemGateway(id)
}