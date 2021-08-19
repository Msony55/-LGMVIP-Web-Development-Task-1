import React, { useState } from "react";
import CardList from "./components/CardList";
import Navbar from "./components/Navbar";
import Loader from "./components/loader";
import ReactPaginate from "react-paginate";
import axios from "axios";

const App = () => {
  const [users, setUser] = useState([]);
  const [page, setPage] = useState();
  const [button, setIsButtonClicked] = useState(false);
  const [searchfeild, setSearchfeild] = useState("");
  const pageCount = page;

  //it fetch the api onClick get Users button
  const getUsers = () => {
    setIsButtonClicked(true);
    const timer = setTimeout(() => {
      axios
        .get(`https://reqres.in/api/users`, { params: { page: 1 } })
        .then(function (result) {
          console.log(result.data.total_pages);
          setUser(result.data.data);
          setPage(result.data.total_pages);
        });
    }, 3000);
    return () => clearTimeout(timer);
  };

  const handelPageClick = ({ selected: selectedPage }) => {
    const originalPage = selectedPage + 1;
    axios
      .get(`https://reqres.in/api/users`, { params: { page: originalPage } })
      .then(function (result) {
        console.log(result.data.total_pages);
        setUser(result.data.data);
        setPage(result.data.total_pages);
      });
  };

  //used to change the searchfield
  const onSearchChange = (event) => {
    setSearchfeild(event.target.value);
  };

  //used to filter the users 
  const filteredUsers = users.filter((users) => {
    return users.first_name.toLowerCase().includes(searchfeild.toLowerCase());
  });

  //check for api is fetch or not
  if (users.length === 0 && button === false) {
    return (
      <>
        <Navbar getUsers={getUsers} searchChange={onSearchChange} />
        <h1 className="tc text-info">
          Please click on get users to get all details
        </h1>
      </>
    );
  }

  //when button is clicked but data is not avaliable then loader is work
  else if (button == true && users.length === 0) {
    return (
      <>
        <Navbar getUsers={getUsers} />
        <Loader className="loader"></Loader>
      </>
    );
  }

  //after data is avaliable its shown 
  else {
    return (
      <>
        <Navbar getUsers={getUsers} searchChange={onSearchChange} />
        <div className="tc">
          <CardList users={filteredUsers} />
          <div className="paginate-container">
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={4}
              disableInitialCallback={true}
              onPageChange={handelPageClick}
              containerClassName="pagination"
              activeClassName="active"
              pageLinkClassName="page-link"
              breakLinkClassName="page-link"
              nextLinkClassName="page-link"
              previousLinkClassName="page-link"
              pageClassName="page-item"
              breakClassName="page-item"
              nextClassName="page-item"
              previousClassName="page-item"
              previousLabel={"<"}
              nextLabel={">"}
            />
          </div>
        </div>
      </>
    );
  }
};

export default App;
