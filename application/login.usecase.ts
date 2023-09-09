import { loginGateway } from "../infra/gateways/login.gateway";
import { userGateway } from "../infra/gateways/user.gateway";

export async function loginUseCase(email: string, password: string){
    return await loginGateway(email, password)
}

export async function userUseCase(){
    return await userGateway()
}