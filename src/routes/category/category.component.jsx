import {  useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

// import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/category/category.selector';

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
   const categoriesMap= useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
