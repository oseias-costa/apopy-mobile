export interface Sale {
  _id: string;
  stockId: string;
  category: string;
  subcategory: string;
  product: string;
  suplier: string;
  quantity: number;
  price: number;
  total: number;
  costPrice: number;
  description: string;
  profit: number;
  percentage: number;
  date: string;
}
