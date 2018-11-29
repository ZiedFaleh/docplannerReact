import React from 'react';
import { Card, CardDeck, Label, Row, Col} from 'reactstrap';
import Newsliste from './newliste';
const newstab=[{
    id:'1',
    source:'https://www.docplanner.com/img/flag.png',
    title:'Leader in 10 countries',
    article: "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina, and Chile",
    },
    
    {
    id:'2',
    source:'https://www.docplanner.com/img/visits.png',
    title:'1 million appointments',
    article:'booked last month',
    
    },
    {
    id:'3',
    source:'https://www.docplanner.com/img/patients.png',
    title:'30 million unique patients',
    article:'visit us every month',
    
    },
    {
    id:'4',
    source:'https://www.docplanner.com/img/doctors.png',
    title:'2 million active doctors',
    article:'trust in our solutions',
    
    }]

const Products = (props) => {
    return (
        <div>
        <Row>
        <div className="product-zone">
            <Col lg="7">
        <Label className="the-title">
            The world's
            <br/>
            biggest healthcare platform
        </Label>
        <br/>
        <Label className="the-text">
        We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
        </Label>
        </Col>
        <Col lg="5" className="tooblar">
        <Row>
        <div>
        <div className="tooblar-style">
            <Newsliste news={newstab} />
        </div>
        </div>
        </Row>
        </Col>
        </div>
        </Row>
        </div>
            );
};

export default Products;