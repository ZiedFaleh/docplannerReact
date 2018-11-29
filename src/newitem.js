import React from 'react';
import { Card, CardDeck, Label, Row, Col} from 'reactstrap';
const Newsitem=({item})=>{
    return(
        <Col lg="6">
    <div className='newsitem-app'>
        <img src={item.source}/>
        <Label className="tooblar-title">{item.title}</Label>
        <Label className="tooblar-text">{item.article}</Label>
    </div>
    <br/>
    </Col>)
}
export default Newsitem;