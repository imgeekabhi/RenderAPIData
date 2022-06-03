import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const FetchData = () => {
  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
        setLoader(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loader ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((item, i) => {
            return <Link to={`/${item.id}`}>{item.id}</Link>;
          })}
        </ul>
      )}
    </>
  );
};
export default FetchData;
