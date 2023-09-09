export interface Product {
  _id: string;
  name: string;
  category: string;
  subcategory: string;
  suplier: string;
}

export interface ProductCreate {
  name: string;
  category: string;
  subcategory: string;
  suplier: string;
}
