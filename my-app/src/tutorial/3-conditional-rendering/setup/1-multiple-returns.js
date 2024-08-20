import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarsons";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(`hi`);

  useEffect(()=>{
    fetch(url)
      .then((resp) => {
        if(resp.status >= 200 && resp.status <= 300){
          return resp.json()
        }
        else{
          setIsLoading(false)
          setIsError(true)
        }
      })
      .then((userData) => {
        const { login } = userData
        setUser(login)
        setIsLoading(false)
      }).catch((error) => console.log(error));
  }, [])
  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <h2>error(cannot fetch data)</h2>
      </>
    );
  }
  if (user) {
    
  }
  return (
    <>
      <h2>{user}</h2>
    </>
  );
};

export default MultipleReturns;
