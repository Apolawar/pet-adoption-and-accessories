import React from "react";

const Card = (props) => {
  return (
    <>
      {/* <div className="card-container">
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div> */}
      <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
        <div className="col-11 col-md-10">
          <h2 className="card-head my-5">{props.title}</h2>
          <p className="fs-4">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
