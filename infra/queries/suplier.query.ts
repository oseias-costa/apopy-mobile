export const GET_SUPLIERS = `
  query Suplier {
    supliers {
      _id
      name
      userId
    }
  }
`;

export const CREATE_SUPLIER = `
  mutation CreateSuplier($suplierInput: SuplierInput) {
    createSuplier(suplierInput: $suplierInput) {
      _id
      name
      userId
    }
  }
`;

export const UPDATE_SUPLIER = `
  mutation UpdateSuplier($suplierInput: SuplierInput) {
    updateSuplier(suplierInput: $suplierInput) {
      _id
      name
    }
  }
`;

export const DELETE_SUPLIER = `
  mutation DeleteSuplier($id: ID) {
    deleteSuplier(_id: $id) {
      _id
    }
  }
`;

export const SUPLIER_FRAGMENT = `
  fragment MySuplier on Suplier {
    _id
    name
  }
`;
