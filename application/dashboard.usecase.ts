import { AxiosResponse } from "axios";
import { getDashboardGateway } from "../infra/gateways/dasboard.gateway";

export async function getDashboardUseCase(): Promise<AxiosResponse>{

    return await getDashboardGateway()
}