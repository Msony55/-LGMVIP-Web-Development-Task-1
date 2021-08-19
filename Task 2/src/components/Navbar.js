import React from "react";

const Navbar = ({ getUsers, searchfeild, searchChange }) => {
  const [hidebtn, sethidebtn] = React.useState(false);
  const btn = () => sethidebtn(true);
  if (hidebtn) {
    document.getElementById("btnshow").style.visibility = "hidden";
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <h2>User List</h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"></li>
          </ul>
          <button
            class="btn btn-outline-light me-2"
            aria-current="page"
            id="btnshow"
            onClick={() => {
              getUsers();
              btn();
            }}
          >
            Get Users
          </button>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search by name"
              onChange={searchChange}
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
