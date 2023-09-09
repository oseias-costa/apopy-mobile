import { AxiosResponse } from "axios";
import { Stock } from "../../domain/entities/stock";
import { httpClient } from "../http/httpClient";
import { CREATE_STOCK_ITEM, DELETE_STOCK_ITEM, GET_STOCK, UPDATE_STOCK_ITEM } from "../queries/stock.query";

export async function getStockGateway(): Promise<AxiosResponse<Stock[]>> {
  return await httpClient(GET_STOCK, {});
}

export async function createStockItemGateway(
  data: Stock
): Promise<AxiosResponse> {
  const variables = {
    stockItem: data,
  };

  return await httpClient(CREATE_STOCK_ITEM, variables);
}

export async function updateStockItemGateway(
  data: Stock
): Promise<AxiosResponse>{
  
  const variables = {
    stockItem: data
  }

  return await httpClient(UPDATE_STOCK_ITEM, variables)
}

export async function deleteStockItemGateway(id: string): Promise<AxiosResponse>{
  const variables = {
    deleteStockItemId: id
  }

  return await httpClient(DELETE_STOCK_ITEM, variables)
}