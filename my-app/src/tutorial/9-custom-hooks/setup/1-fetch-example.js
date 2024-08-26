// import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://www.themealdb.com/api/json/v1/1/random.php";

const Example = () => {
  const { loading, meals } = useFetch(url);
  console.log(meals);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Example;
