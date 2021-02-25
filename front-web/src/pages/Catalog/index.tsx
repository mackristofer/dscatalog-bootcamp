import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import './styles.scss';
import { makeRequest } from 'core/utils/request';
import { ProductsResponse } from 'core/types/Product';
import ProductCardLoader from './components/Loaders/ProductCardLoader';
import Pagination from 'core/components/Pagination';

const Catalog = () => {

   const [productsReponse, setProductsResponse] = useState<ProductsResponse>();
   const [isLoading, setIsLoading] = useState(false);
   const [activePage, setActivePage] = useState(0);

   console.log(productsReponse);
   useEffect(() => {
      const params = {
         page: activePage,
         linesPerPage: 12
      }

      setIsLoading(true);
      makeRequest({ url: '/products', params })
         .then(response => setProductsResponse(response.data))
         .finally(() => {
            setIsLoading(false);
         })

   }, [activePage]);
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
         {productsReponse && (
         <Pagination 
         totalPages={productsReponse.totalPages}
         activePage={activePage}
         onChange={page => setActivePage(page)}
         />
         )}
      </div>
   );
}

export default Catalog;