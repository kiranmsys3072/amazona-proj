
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Productscreen  from './components/Productscreen';
import Homescreen from './components/Homescreen';
function App() {
  return (
    <BrowserRouter>
   
    
    <div >
      <header>
       <a href='/'>Amazona</a>
      </header>
      <main>
      <Routes>
      <Route path="/products/:slug" element={<Productscreen/>}/>
      <Route path="/" element={<Homescreen/>}/>
    </Routes>
  
      
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
