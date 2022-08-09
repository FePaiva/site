import React from 'react'
import Feed from './Feed'


const Home = ({ products }) => {
  return (
    <main className="Home"> 
        {products.length ? (
              <Feed products={products} />
        ) : (
          <p styke={{ marginTop: "2rem"}}>
              No products to display.
          </p>
        )}

    </main>
  )
}

export default Home