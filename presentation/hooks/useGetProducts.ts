import { useDispatch, useSelector } from "react-redux";
import { getProductsUseCase } from "../../application/product.usecase";
import { fetchProducts } from "../redux/slice/productSlice";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { ProductInterface } from "../types/pages/products.types";

export function useGetProducts() {
  const dispatch = useDispatch();
  const products: ProductInterface[] = useSelector((state: RootState) => state?.product.products);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    if (products.length === 0) {
      getProductsUseCase().then((res) => {
        dispatch(fetchProducts(res.data.data.products))
        setLoading(false)
      });
    }
    setLoading(false)
  }, []);

  return { products, loading };
}
