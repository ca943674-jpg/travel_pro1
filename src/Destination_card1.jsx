import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample(props) {
  return (
   <div className='w-100'>
     <Card className="rounded shadow-lg w-100">
      <Card.Img variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.Name}</Card.Title>
        <Card.Text>
          {props.data.details}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body className='d-flex justify-content-center align-items-center gap-2 bg-color-primary'>
        <button>Explore Tours</button>
        <i className="fa-solid fa-arrow-right"></i>
      </Card.Body>
    </Card>
   </div>

  );
}

export default KitchenSinkExample;