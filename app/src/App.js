import "./App.css";
import TextBoxBottom from "./components/TextBoxBottom";
import UploadImage from "./components/UploadImage";
import TextBoxTop from "./components/TextBoxTop";

function App() {
  return (
    <div className="flex flex-wrap ">
      <UploadImage />
      <TextBoxTop />
      <TextBoxBottom />
    </div>
  );
}

export default App;
