
import { AxiosResponse } from "axios";
import { 
    createSuplierGateway, 
    deleteSuplierGateway, 
    getSupliersGateway, 
    updateSuplierGateway 
} from "../infra/gateways/suplier.gateway";

export async function createSuplierUseCase(name: string): Promise<AxiosResponse> {
  return await createSuplierGateway({ name });
}

export async function deleteSuplierUseCase(id: string): Promise<AxiosResponse>{
    return await deleteSuplierGateway(id)
}

export async function getSupliersUseCase(): Promise<AxiosResponse> {
    const data = await getSupliersGateway();
    return data;
}

export async function updateSuplierUseCase(_id: string, name: string): Promise<AxiosResponse> {
    return await updateSuplierGateway({ _id, name });
  }
  