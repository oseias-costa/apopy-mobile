import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSaleUseCase } from "../../application/sale.usecase";
import { fetchSales } from "../redux/slice/saleSlice";
import { RootState } from "../redux/stores";

export function useGetSales() {
  const dispatch = useDispatch();
  const sales = useSelector((state: RootState) => state?.sale.sales);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    if (sales.length === 0) {
      getSaleUseCase().then((res) => { 
        dispatch(fetchSales(res.data.data.sales))
        setLoading(false)
      }).catch((err) => {
        console.log(err)
      })
    }
    setLoading(false)
  }, []);

  return { sales, loading };
}
