import React from 'react';
import { Label, Row, Col , UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Clients = (props) => {
  return (
    <Row>
    <div className="card-decoration">
    <Col lg="6">
      <div className="card1">
        
        <div className="elements-visible">
                            <div class= "marketplace">
                                    <Label className="txt-title">For patients</Label>
                                    <Label className="txt-content">Find a doctor, book a visit and solve any health-related doubt</Label>
                                    <div className="style-select-initial">
                                    <UncontrolledDropdown setActiveFromChild className="style-select">
                                    <DropdownToggle tag="a" className="nav-link" caret>
                                        CHOOSE COUNTRY
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                    </div>
                            </div>
                            
                        </div>
                        
      </div>
      </Col>
      <Col lg="6">
      <div className="card2">
      
      <div className="elements-visible">
                            <div class="item-saas">
                                <Label className="txt-title">For doctors</Label>
                                <Label className="txt-content">Save time managing visits and cut no-shows by half</Label>
                            </div>
                        </div>
                    
      </div>
      </Col>
    </div>
    </Row>
  );
};

export default Clients;