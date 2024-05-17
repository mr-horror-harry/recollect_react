import { Fragment } from "react";
import './Card.css'
import App from "../App/App";

const Card = () => {
  return (
    <Fragment>
      <div className="card">
        <h1 className="header"> This is the card title! </h1>
        <p className="content">
          &nbsp;&nbsp;&nbsp;&nbsp; Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      <App />
      </div>
    </Fragment>
  );
};

export default Card;
