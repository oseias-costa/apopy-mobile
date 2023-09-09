import { httpClient } from "../http/httpClient"
import { LOGIN } from "../queries/login.query"

export async function loginGateway(email: string, password: string){

const variables = {
    loginInput: {
        email: email,
        password: password
    }
}

return await httpClient(LOGIN, variables)

}