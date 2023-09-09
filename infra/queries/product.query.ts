export const GET_PRODUCTS = `
    query Products {
            products {
                _id
                name
                category
                subcategory
                suplier
                userId
        }
    }
`;

export const CREATE_PRODUCT = `
    mutation Mutation($productInput: ProductInput) {
        createProduct(productInput: $productInput) {
            _id
            category
            name
            subcategory
            suplier  
        }
}
`;

export const UPDATE_PRODUCT = `
    mutation UpdateProduct($productEdit: ProductEdit) {
        updateProduct(productEdit: $productEdit) {
            _id
            name
            category
            subcategory
            userId
            suplier
        }
    }
`

export const DELETE_PRODUCT = `
    mutation Mutation($id: ID) {
        deleteProduct(_id: $id) {
            _id
            category
            name
            subcategory
            suplier
        }
    }
`