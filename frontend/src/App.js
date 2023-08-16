import data from './data'


function App() {
  return (
    <div >
      <header>
       <a href='/'>Amazona</a>
      </header>
      <main>
       <h1>Featured Products</h1>
       <div className="products">
       {
        data.products.map((product)=>{
          return <div key={product.slug} className="product">
            <a href ={`/products/${product.slug}`}   >
            <img src={product.image} alt={product.name}/>
            </a>
            <div className="product-info">
            <a href ={`/products/${product.slug}`}   >
            <p>{product.name}</p>
            </a>
            <p> <strong>${product.price}</strong></p>
            </div>
            
          </div>
        })
       }
       </div>
      
      </main>
    </div>
  );
}

export default App;
