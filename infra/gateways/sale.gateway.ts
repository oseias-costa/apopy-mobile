import { AxiosResponse } from "axios";
import { Sale } from "../../domain/entities/sale";
import { httpClient } from "../http/httpClient";
import { GET_SALES, REVERSE_SALE, TRANSFER_SALE } from "../queries/sale.query";

export async function getSalesGateway(): Promise<AxiosResponse> {
  return await httpClient(GET_SALES, {});
}

export async function transferSaleGateway(data: Omit<Sale, "_id">): Promise<AxiosResponse> {
  const variables = {
    saleInputTransfer: data,
  };

  return await httpClient(TRANSFER_SALE, variables);
}

export async function reverseSaleGateway(data: Sale): Promise<AxiosResponse> {
  const variables = {
    saleInputTransfer: data 
  }

  return await httpClient(REVERSE_SALE, variables);
}
