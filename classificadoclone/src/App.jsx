
import './App.css'

function App() {

  return (
    <>
      <header>
        <div>
          <button>nav</button>
          <p>Logo</p>
          <button>Cambiar Area</button>
        </div>
        <div>
          <span>
            search
          </span>
          <a href=''>Mis Anuncios</a>
          <a href=''>Publicar anuncio GRATIS</a>

        </div>
      </header>
      <div className='jumbo-tron'>
        <div className="top-location-container">
          <div>
            <p>insert image</p>
          </div>
          <div className='categories-container'>
            <div>
              <h4>Ciudades en California</h4>
              <ul>
                <li><a href=''>Los Angeles</a></li>
                <li><a href=''>Orange County</a></li>
                <li><a href=''>San Bernardino</a></li>
                <li><a href=''>Riverside</a></li>
                <li><a href=''>San Diego</a></li>
                <li><a href=''>Bakersfield</a></li>
                <li><a href=''>Fresno</a></li>
                <li><a href=''>mas</a></li>

              </ul>
            </div>
            <div>
              <h4>Latinoamerica</h4>
              <ul>
                <li><a href=''>Bogota</a></li>
                <li><a href=''>Lima</a></li>
                <li><a href=''>Mexico DF</a></li>
                <li><a href=''>Quito</a></li>
                <li><a href=''>Guayaquil</a></li>
                <li><a href=''>uatemala City</a></li>
                <li><a href=''>Santiago</a></li>
                <li><a href=''>Buenos Aires</a></li>

              </ul>
              <ul>
                <li><a href=''>Caracas</a></li>
                <li><a href=''>San Juan</a></li>
                <li><a href=''>Medelin</a></li>
                <li><a href=''>Cali</a></li>
                <li><a href=''>Queretaro</a></li>
                <li><a href=''>Ciudad Panama</a></li>
                <li><a href=''>mas</a></li>

              </ul>
            </div>
            <div>
              <h4>Ciudades en E.E.U.U</h4>
              <ul>
                <li><a href=''>Los Angeles</a></li>
                <li><a href=''>Orange County</a></li>
                <li><a href=''>San Bernardino</a></li>
                <li><a href=''>Riverside</a></li>
                <li><a href=''>San Diego</a></li>
                <li><a href=''>Bakersfield</a></li>
                <li><a href=''>Fresno</a></li>
                <li><a href=''>mas</a></li>

              </ul>
            </div>


          </div>
        </div>
      </div>

      <div>
        <h2>Anuncios y Clasificados GRATIS en x</h2>
        <div>
          <h4>this is a filler</h4>
          <ul>
            <li><a href=''>Trabajos en Limpieza</a></li>
            <li><a href=''>Choferes y Conductores</a></li>
            <li><a href=''>Meseros y Cocineros</a></li>
            <li><a href=''>Mecanica de Autos</a></li>
            <li><a href=''>Trabajos en Oficina</a></li>
            <li><a href=''>Ver mas categories</a></li>


          </ul>
        </div>
      </div>

      <div className='Announcements'>
        <h2>Anuncios destacados</h2>

        <div className='Announcements-grid'>
        <div className='card'>
           <div>
           <h3>THis is an example</h3> 
          <p>this is an example</p> 
          </div>
            <p>An image</p>
        </div>
        <div className='card'>
           <div>
           <h3>THis is an example</h3> 
          <p>this is an example</p> 
          </div>
            <p>An image</p>
        </div>
        <div className='card'>
           <div>
           <h3>THis is an example</h3> 
          <p>this is an example</p> 
          </div>
            <p>An image</p>
        </div>
        <div className='card'>
           <div>
           <h3>THis is an example</h3> 
          <p>this is an example</p> 
          </div>
            <p>An image</p>
        </div>

      </div>
      </div>

      <footer>
        <div>
          <div>
            <h3>ELClasificado</h3>
            <div>logos</div>
            <p>El Clasificado es parte de EC Hispanic Media lider compania multimedia lider de habla hispana en el sur de california</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
