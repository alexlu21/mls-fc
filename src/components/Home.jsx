import '../stlyes/home.css';
import img1 from '../assets/galeria_1.jpg'
import img2 from '../assets/galeria_2.webp'
// Asegúrate de tener estilos para el fondo

const Home = () => {
  return (
    <div className="home-container">
      <header className="text-center my-4">
        <h1>Bienvenido a Mls FC</h1>
      </header>
      <section className="mb-4">
        <h2>Últimas Noticias</h2>
        <ul className="list-unstyled">
          <li>¡Victoria emocionante en el último partido!</li>
          <li>Próximo partido: MaulasFC vs Rivales FC, este sábado a las 17:00.</li>
          <li>¡Únete a nosotros para la celebración del aniversario del equipo!</li>
        </ul>
      </section>
      <section>
        <h2>Galería</h2>
        <div className="gallery">
          {/* Aquí puedes agregar imágenes */}
          <img src={img1} alt="Partido 1" className="img-fluid" />
          <img src={img2} alt="Partido 2" className="img-fluid" />
        </div>
      </section>
      <footer className="text-center my-4">
        <p>&copy; 2024 MaulasFC. Todos los derechos reservados.</p>
        <div>
          <a href="#">Facebook</a> | 
          <a href="#">Twitter</a> | 
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

