import User from "./user";
import UserClass from "./userClass";
import { Component } from "react";
class About extends Component{
    // constructor(){
    //     super()
    //     // console.log("Parent constructor")
    // }
    componentDidMount(){
        // console.log("Parent componentDidMount")
    }
    render(){
        // console.log("Parent render")
        return (
            <div className="userComponents">
              <User />
              <UserClass />
            </div>
          );
    
    }

};

export default About;
// import User from "./user";
// import UserClass from "./userClass";
// const About = () => {
//   return (
//     <>
//       <User name={'Sarath Chandra'} role={'Web Developer'} />
//       <UserClass name={'Mounika Gampa'} role={'SAP End user'}  />
//     </>
//   );
// };

// export default About;
