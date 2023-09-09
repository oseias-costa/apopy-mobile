export const GET_CATEGORIES = `
    query Categories {
        categories {
        _id
        name
        subcategory
        userId
        }
    }
`;

export const CREATE_CATEGORY = `
  mutation CreateCategory($categoryInput: CategoryInput) {
    createCategory(categoryInput: $categoryInput) {
      _id
      name
      subcategory
      userId
    }
  }
`;

export const UPDATE_CATEGORY = `
  mutation UpdateCategory($categoryEdit: CategoryEdit) {
    updateCategory(categoryEdit: $categoryEdit) {
      _id
      name
      subcategory
      userId
    }
  }
`;

export const DELETE_CATEGORY = `
  mutation Mutation($categoryEdit: CategoryEdit) {
    deleteCategory(categoryEdit: $categoryEdit) {
      _id
      }
    }
`;
