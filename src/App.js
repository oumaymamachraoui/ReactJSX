import "./App.css";
import photo from "./1.jpg";
function App() {
  return (
    <div className="App">
      <h1>Application jsx </h1>
      <div className="fleex">
        <div className="bloc1">
          <h3> image in public</h3>
          <hr />
          <img src="./image-in-public.jpg" alt="papillon" />
        </div>
        <hr></hr>
        <div className="bloc1">
          <h3> image in source </h3>
          <hr />
          <img src={photo} alt="papillon" />
        </div>
      </div>

      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img src={photo} alt="image in source" />

        <br />

        <img src="/image-in-public.jpg" alt="image in public " />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
