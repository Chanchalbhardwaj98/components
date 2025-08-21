import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";


function App() {
  let firstVariable = "world";
  const tellUsAbout = () => {
    return "Good"
  };
  return <div>
    <FirstComponent></FirstComponent>
    <SecondComponent></SecondComponent>
    <ThirdComponent></ThirdComponent>
    <FourthComponent></FourthComponent>

    <h1>Hello {firstVariable}</h1>
    <h2 style={{ color: "red" }}>{tellUsAbout()}</h2>
    <div style={{ border: "1px solid", padding: "18px", marginTop: "5px" }}>
      <h1>First card details</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi placeat iure est! Et voluptates rerum qui commodi saepe ex nostrum magni, obcaecati nihil neque. Eaque quo expedita perferendis aut!</p>
    </div>

    <div style={{ border: "1px solid", padding: "18px", marginTop: "5px" }}>
      <h1>Second card details</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi placeat iure est! Et voluptates rerum qui commodi saepe ex nostrum magni, obcaecati nihil neque. Eaque quo expedita perferendis aut!</p>
    </div>

    <div style={{ border: "1px solid", padding: "18px", marginTop: "5px" }}>
      <h1>Third card details</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi placeat iure est! Et voluptates rerum qui commodi saepe ex nostrum magni, obcaecati nihil neque. Eaque quo expedita perferendis aut!</p>
    </div>

    <div style={{ border: "1px solid", padding: "18px", marginTop: "5px" }}>
      <h1>Fourth card details</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi placeat iure est! Et voluptates rerum qui commodi saepe ex nostrum magni, obcaecati nihil neque. Eaque quo expedita perferendis aut!</p>
    </div>

  </div>

}

export default App;

// function App() {
//   return(
//     <FirstComponent></FirstComponent>
//     <SecondComponent></SecondComponent>
//     <ThirdComponent></ThirdComponent>
//     <FourthComponent/>
//   )
// }

// export default App;