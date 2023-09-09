import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { getCategoriesUseCase } from "../../application/categories.usecase";
import { fetchCategories } from "../redux/slice/categorySlice";
import { CategoryInterface } from "../../domain/category";

export function useGetCategories() {
  const dispatch = useDispatch();
  const categories: CategoryInterface[] = useSelector((state: RootState) => state.category?.categories);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    if (categories.length === 0) {
      getCategoriesUseCase().then((res) => {
        dispatch(fetchCategories(res.data.data.categories))
        setLoading(false)
      });
    }
    setLoading(false)
  }, []);

  return { categories, loading };
}
