import React from "react";
import Card from "./Card";

const CardList = ({ users }) => {
  return (
    <div>
      <div class="row mx-4">
        {
          //displays all the card by calling the card component and passing all the values
          users.map((user, i) => {
            return (
              <div class="col-lg-3 col-md-6 mb-4 ">
                <Card
                  key={i}
                  id={users[i].id}
                  name={users[i].first_name}
                  lname={users[i].last_name}
                  email={users[i].email}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default CardList;
