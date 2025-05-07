import { useState, useEffect } from "react";
const User = () => {
  const [myData, setMyData] = useState({});
  useEffect(() => {
    userData();
    // const timer = setInterval(() => {
    //   console.log("namate setinterval function");
    // }, 1000);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);
  const userData = async () => {
    const data = await fetch(
      "https://api.github.com/users/Udayagiri-sarathchandra"
    );
    const json = await data.json();
    setMyData(json);
  };
  const { name, location, avatar_url } = myData;
  return (
    <>
    <div className="user-card-class">
        <h3 style={{ textAlign: "center" }}>Function Component </h3>
        <div className="user-card">
          <img src={avatar_url} alt="Avatar" style={{ width: "50%" }} />
          <div className="user-container">
            <h4>
              <b>{name}</b>
            </h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
