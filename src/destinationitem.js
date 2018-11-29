import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const DestinationItem = ({item1}) => {
  return (
    <div>
      <Col lg="12">
      <Card>
        <CardImg top width="100%" src={item1.source} />
        <CardBody className="cardbody">
          <CardTitle>{item1.title}</CardTitle>
          <Button color="primary" size="sm">SEE OPENINGS</Button>
        </CardBody>
      </Card>
      </Col>
      <br/>
    </div>
  );
};

export default DestinationItem;