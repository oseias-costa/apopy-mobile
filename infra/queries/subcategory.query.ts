export const CREATE_SUBCATEGORY = `
    mutation CreateSubcategory($subcategoryInput: SubcategoryInput) {
        createSubcategory(subcategoryInput: $subcategoryInput) {
            name
            _id
            subcategory
        }
    }
`;

export const UPDATE_SUBCATEGORY = `
    mutation Mutation($subcategoryEdit: SubcategoryEdit) {
        updateSubcategory(subcategoryEdit: $subcategoryEdit) {
            name
            _id
            subcategory
        }
    }
`;

export const DELETE_SUBCATEGORY = `
    mutation DeleteSubcategory($subcategoryEdit: SubcategoryEdit) {
        deleteSubcategory(subcategoryEdit: $subcategoryEdit) {
            name
            _id
            subcategory
        }
    }   
`;
