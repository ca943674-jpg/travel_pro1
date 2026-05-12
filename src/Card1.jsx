import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

function Card1(props) {


  return (
    <Card className='border border-0'>
      <Card.Body className='card2 text-dark d-flex flex-column  justify-content-end'>
        <img src={props.img} alt="img not found" className='card-img-top w-100'/>
        <div className='card-text d-flex flex-row align-items-center justify-content-between'>
          <Card.Title>Place: {props.name1}</Card.Title>
          <Card.Text>
            Tour Day: {props.day}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Card1;