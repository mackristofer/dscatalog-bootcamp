import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import './styles.scss';
import { makeRequest } from 'core/utils/request';
import { ProductsResponse } from 'core/types/Product';
import ProductCardLoader from './components/Loaders/ProductCardLoader';

const Catalog = () => {

   const [productsReponse, setProductsResponse] = useState<ProductsResponse>();
   const [isLoading, setIsLoading] = useState(false);
   console.log(productsReponse);
   useEffect(() => {
      const params = {
         page: 0,
         linesPerPage: 10
      }

      setIsLoading(true);
      makeRequest({ url: '/products', params })
         .then(response => setProductsResponse(response.data))
         .finally(() => {
            setIsLoading(false);
         })

   }, []);
   return (
      <div className="catalog-container">
         <h1 className="catalog-title">Catálogo de produtos</h1>
         <div className="catalog-products">
            {isLoading ? <ProductCardLoader /> : (
               productsReponse?.content.map(product => (
                  <Link to={`/products/${product.id}`} key={product.id}>
                     <ProductCard product={product} />
                  </Link>
               ))
            )}

         </div>
      </div>
   );
}

export default Catalog;