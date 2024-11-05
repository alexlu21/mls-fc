import '../stlyes/about.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
  return (
    <section className="about-us py-5">
      <div className="container">
        <h2 className="text-center mb-4 animate__animated animate__fadeInDown">Sobre Nosotros</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow animate__animated animate__fadeInUp">
              <img
                src="https://via.placeholder.com/150"
                alt="History"
                className="card-img-top rounded-circle mx-auto mt-3 img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Historia</h5>
                <p className="card-text">Desde su fundación, MaulasFC ha crecido...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow animate__animated animate__fadeInUp delay-1s">
              <img
                src="https://via.placeholder.com/150"
                alt="Mission"
                className="card-img-top rounded-circle mx-auto mt-3 img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Misión</h5>
                <p className="card-text">Nuestra misión es inspirar y unir a los fans...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow animate__animated animate__fadeInUp delay-2s">
              <img
                src="https://via.placeholder.com/150"
                alt="Vision"
                className="card-img-top rounded-circle mx-auto mt-3 img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Visión</h5>
                <p className="card-text">MaulasFC se proyecta hacia el futuro con...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
