import React from 'react';
import { Card, CardDeck, Label, Row, Col} from 'reactstrap';
import Liste from './liste';
const newstab=[{
    id:'1',
    source:'https://www.docplanner.com/images/warsaw.png',
    title:'Warsaw'
    },
    
    {
    id:'2',
    source:'https://www.docplanner.com/images/barcelona.png',
    title:'Barcelona'
    },
    {
    id:'3',
    source:'https://www.docplanner.com/images/istanbul.png',
    title:'Istanbul',
    
    },
    {
    id:'4',
    source:'https://www.docplanner.com/images/rome.png',
    title:'Rome',
    
    },
    {
    id:'5',
    source:'https://www.docplanner.com/images/mexico-city.png',
    title:'Mexico-City',
    
    },
    {
    id:'6',
    source:'https://www.docplanner.com/images/curitiba.png',
    title:'Curitiba',
    
    }]
    const Destination = (props) => {
        return (
            <div className="destination-style">
                <Label className="destination-title">
                    Improve the lives of millions.<br/> Change yours forever
                </Label>
                <Label className="destination-text">
                    More than 500 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search for great talent never stops.
                </Label>
            <div className="destination-tabs">
                <Row>
                <Liste news={newstab} />
                </Row>
            </div>
            </div>

            );
};

export default Destination;