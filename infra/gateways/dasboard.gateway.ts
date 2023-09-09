import { AxiosResponse } from "axios";
import { httpClient } from "../http/httpClient";
import { GET_DASHBOARD } from "../queries/dashboard.query";


export async function getDashboardGateway(): Promise<AxiosResponse>{

    return await httpClient(GET_DASHBOARD, {})
} 