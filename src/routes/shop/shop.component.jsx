import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { setCategoriesMap } from "../../store/categories/category.action.js";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, [dispatch]); // we put in dispatch here since eslint gives an error otherwise, still works the same as onMount

  return (
    <>
      <Outlet />
    </>
  );
};

export default Shop;
