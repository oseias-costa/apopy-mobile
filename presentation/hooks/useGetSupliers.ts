import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSupliersUseCase } from "../../application/suplier.usecase";
import { fetchData } from "../redux/slice/suplierSlice";
import { RootState } from "../redux/store";

export function useGetSuplier() {
  const supliers = useSelector((state: RootState) => state.suplier.supliers);
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    if (supliers.length === 0) {
      getSupliersUseCase().then((res) =>{
        dispatch(fetchData(res.data.data.supliers))
        setLoading(false)
      });
    }
    setLoading(false)
  }, []);

  return { supliers, loading };
}
