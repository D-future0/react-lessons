import React from 'react'
import Product from './Product'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://autocomplete.clearbit.com/v1/companies/suggest?query=segment'

const Index = () => {
  const { products } = useFetch(url)
  console.log(url)
  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index
