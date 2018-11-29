import React from 'react';
import { Label, CardTitle, CardText } from 'reactstrap';

const Introduction = (props) => {
  return (
    <div className="intro">
        <img class="lead__logo" src="https://www.docplanner.com/img/sygnet.png" srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"></img>
        <Label className="title">Making the healthcare experience more human</Label>
        <div className="intro-txt row">
        <Label className="col-lg-6 text">
            We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.
        </Label>
        <Label className="col-lg-6 text">
        We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.
        </Label>
        </div>
    </div>
  );
};

export default Introduction;