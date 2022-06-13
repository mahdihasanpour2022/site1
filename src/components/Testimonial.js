import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/Testimonial.module.scss";
// images 
import client1 from "../assets/images/testimonial-avatar-1-img.jpg";
import client2 from "../assets/images/testimonial-avatar-2-img.jpg";
import client3 from "../assets/images/testimonial-avatar-3-img.jpg";
const Testimonial = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6>Testimonial</h6>
            <h3>What People Say</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className={Styles.clientBox}>
              <img src={client1} alt="client1" />
              <h4>Tom Estrada</h4>
              <h5>client</h5>
              <p>Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz Brick...</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={Styles.clientBox}>
              <img src={client2} alt="client2" />
              <h4>Michkel Anegl</h4>
              <h5>client</h5>
              <p>dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. car-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={Styles.clientBox}>
              <img src={client3} alt="client3" />
              <h4>Kelly Smith</h4>
              <h5>client</h5>
              <p>Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz Brick...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;