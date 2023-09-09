export const LOGIN = `
    mutation LoginUser($loginInput: LoginInput) {
        loginUser(loginInput: $loginInput) {
        name
        email
        token
        _id
        phone
        }
    }
`;
