import React, { useState,Fragment } from "react";
import { useNavigate } from "react-router-dom"
import MetaData from "../Layout/MetaData.js";
import "./Search.css"

function Search({history}) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if(keyword.trim()){
      navigate(`/products/${keyword}`)
    }
    else{
      navigate(`/products`)
    
    }
  }
  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE"  />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
}

export default Search;
