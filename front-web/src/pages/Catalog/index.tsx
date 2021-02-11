import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import './styles.scss';
import { makeRequest } from '../../core/utils/request';
import { ProductsResponse } from '../../core/types/Product';

const Catalog = () => {

   const [productsReponse, setProductsResponse] = useState<ProductsResponse>();
   console.log(productsReponse);
   useEffect(() => {
      const params = {
         page: 0,
         linesPerPage: 10
      }
      makeRequest({url:'/products', params})
      .then(response => setProductsResponse(response.data));

   }, []);
   return(
      <div className="catalog-container"> 
         <h1 className="catalog-title">Catálogo de produtos</h1>
         <div className="catalog-products">
            {productsReponse?.content.map(product => (
            <Link to="products/1" key={product.id}>
               <ProductCard />
               </Link>
               ))}
      
         </div>
      </div>
      );
}

export default Catalog;