import '../../stlyes/footer.css'

const Footer = () => {
  return (
    <footer className="footer d-flex justify-content-between align-items-center">
      <div className="footer-left">
        <p>&copy; 2024 MaulasFC. Todos los derechos reservados.</p>
      </div>
      <div className="footer-right">
        <a href="#" className="footer-link">Facebook</a> | 
        <a href="#" className="footer-link">Twitter</a> | 
        <a href="#" className="footer-link">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer
