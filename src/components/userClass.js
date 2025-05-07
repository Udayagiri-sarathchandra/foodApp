import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {} };
    // console.log(this.props.name + "child constructor")
  }
  async componentDidMount() {
    //  console.log(this.props.name + "child componentDidMount")
    const data = await fetch(
      "https://api.github.com/users/Udayagiri-sarathchandra"
    );
    const json = await data.json();
    this.setState({ userInfo: json });

    // this.timer = setInterval(() => {
    //   console.log("namate setinterval");
    // }, 1000);
  }

  async componentDidUpdate() {
    //  console.log(this.props.name + "child componentDidUpdate")
  }
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }
  render() {
    // const {name , role} = this.props
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(name +  "child render")
    return (
      <>
        <div className="user-card-class">
          <h3 style={{ textAlign: "center" }}>Class Component</h3>
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
  }
}

export default UserClass;
