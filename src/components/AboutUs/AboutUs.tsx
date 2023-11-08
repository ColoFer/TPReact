import { Card } from "react-bootstrap";
import "./AboutUs.css";


const AboutUs = () => {
  return (
    <div className="container">
      <h3>About Us</h3>
      <p>
We are a team of passionate individuals who love to create amazing things. Our mission is to provide high-quality services and products that exceed our customers' expectations.</p>
    <div className="Card">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/images/about1.jpg" />
      <Card.Body>
        <Card.Title>Feature 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/images/about2.jpg" />
      <Card.Body>
        <Card.Title>Feature 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/images/about3.jpg" />
      <Card.Body>
        <Card.Title>Feature 3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>  
    </div>
  )
}

export default AboutUs