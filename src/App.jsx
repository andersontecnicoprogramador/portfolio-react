import './App.css'
import Footer from './components/Header/Footer'
import Header from './components/Header/Header'

function App() {
 

  return (
    <>
     <Header />
     <section className='container'>
      <div className='apresentacao'>

        <p>
          Olá,sou <br/>
          <span>Anderson Moreira</span> <br />
          Dev Full Stack
        </p>
        <button className='btn btn-red'>
          Saiba mais sobre mim
        </button>
      </div>
      <figure>
        <img className='img-home' src="/developer-red.svg" alt="Imagem de Home" />
      </figure>
     </section>
     <Footer />
    </>
  )
}

export default App
