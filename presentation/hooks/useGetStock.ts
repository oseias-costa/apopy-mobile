import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { getStockUseCase } from "../../application/stock.usecase";
import { fetchStock } from "../redux/slice/stockSlice";

export function useGetStock() {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state?.stock.stock);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    if (stock.length === 0) {
      getStockUseCase().then((res) =>{
        dispatch(fetchStock(res.data.data.stock))
        setLoading(false)
      });
    }
    setLoading(false)
  }, []);

  return { stock, loading };
}
