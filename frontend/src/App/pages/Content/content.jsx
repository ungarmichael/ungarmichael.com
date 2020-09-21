import React,{ Component,useState, useEffect} from "react";
import UgContainer from "./Container/container.jsx";
import "./content.scss";

// const Content = () => {
//   useEffect(() => {
//     Aos.init({duration: 2000});
//   }, [])
//   const fade = useSpring({
//     from: {
//       opacity: 0
//     },
//     to: {
//       opacity: 1
//     }
//   });
//   console.log(fade)

//   return (
//     <div className="ug-content" style={fade}>
//       {/* <button id="ug-button-1" onClick={buttonfunction}>test 1</button> */}
//       {/* <button >test 2</button> */}
//       <div className="ug-background_shader"></div>
//       {/* <Link
//       activeClass="active"
//       to="section1"
//       spy={true}
//       smooth={true}
//       offset={-70}
//       duration={500}
//       /> */}
//       <div className="ug-container-box">
//         <UgContainer />
//         <UgContainer />
//         <UgContainer />
//         <UgContainer />
//         <UgContainer />
//         <UgContainer />
//         <UgContainer />
//       </div>
//     </div>
//   );
// }

// class Content extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

class Content extends Component {
  render() {
    return (
      <div className="ug-content">
        <button id="ug-button-1">test 1</button>
        <div className="ug-background_shader"></div>
        <div className="ug-container-box">
          <UgContainer />
          <UgContainer />
          <UgContainer />
        </div>
      </div>
    );
  }
}

export default Content;