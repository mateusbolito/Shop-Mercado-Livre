import { useContext, useEffect, useState } from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts'
import { ProductCard } from '../ProductCard/ProductCard'
import { Loadings } from '../Loading/Loading'
import AppContext from '../context/AppContext'
export function Products() {
    
    const {products, setProducts, loading, setLoading} = useContext(AppContext)

    useEffect(()=> {
    fetchProducts('iphone').then((response)=>{
    setProducts(response);
    setLoading(false)
    
     })
    }, [])
    
    return (
      (loading && <Loadings /> ) || (
        <section className="products container">
          {products.map((product) => <ProductCard key={product.id} data={product} />)}
        </section>
      )
      
    );
  }
