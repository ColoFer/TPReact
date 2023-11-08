import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="mt-auto py-3 bg-dark text-white">
      <div className="container footer">
        <div>
          <h3>Our Company</h3>
          <p>Some information about your company.</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer