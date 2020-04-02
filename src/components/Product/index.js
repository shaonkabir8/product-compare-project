import React from "react";
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";
import "./styles.css";

const Product = ({ product, compare }) => {

    const tourOptions = {
        defaultStepOptions: {
          cancelIcon: {
            enabled: true
          }
        },
        useModalOverlay: true
      };

      const tour = React.useContext(ShepherdTourContext);

      const steps = tour.addStep('etcccc', {
          text: 'Example text',
          attachTo: '.stats',
          buttons: [
              {
                text: 'Next',
                action: tour.next
              }
          ]
      })

    React.useEffect(() => {
        // nothing for now
    }, [])


  return (
      <ShepherdTour tourOptions={tourOptions} steps={steps}>
    <div key={product.id} className="col-sm-6 col-md-3">
      <div className={"product " + (product.compare ? "compare" : "")}>
        <img src={product.image} alt={product.name} />
        <div className="image_overlay" />
        <div className="view_details" onClick={() => compare(product)}>
          {product.compare ? "Remove" : "Compare"}
        </div>
        <div className="stats">
          <div className="stats-container">
            <span className="product_price">{product.price}</span>
            <span className="product_name">{product.name}</span>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
    </ShepherdTour>
  );
};

export default Product;
