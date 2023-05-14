import { createContext, useEffect, useState } from "react";

import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils.js'

export const CategoriesContext = createContext({
  products: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]); //eslint-disable-line
  useEffect(() =>{
    const getCategoriesMap= async()=>{
    const categoryMap=await  getCategoriesAndDocuments()
    setCategoriesMap(categoryMap)
    }
    getCategoriesMap();

  },[])
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
