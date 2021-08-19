import React from "react";

const Card = ({ name, email, id, lname }) => {
  //Displays all the information in a card format
  return (
    <div class="card" style={{ width: "18rem", border: "1px solid" }}>
      <img
        src={`https://reqres.in/img/faces/${id}-image.jpg`}
        class="card-img-top"
        alt="user image"
        style={{ maxHeight: "100%", height: "280px" }}
      />
      <div class="card-body" style = {{textAlign:"left"}}>
        <h6 class="card-title">ID : {id}</h6>
        <h6 class="card-title">
          Name : {name} {lname}
        </h6>
        <h6 class="card-title">Email : {email}</h6>
      </div>
    </div>
  );
};

export default Card;
