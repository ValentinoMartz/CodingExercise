import "./App.css";
import TextBoxBottom from "./components/TextBoxBottom";
import UploadImage from "./components/UploadImage";
import TextBoxTop from "./components/TextBoxTop";

function App() {
  return (
    <div className="flex w-full h-[100vh] flex-wrap">
      <UploadImage />
      <div className="w-[45%] h-[35vh] ">
        <TextBoxTop />
        <TextBoxBottom />
      </div>
    </div>
  );
}

export default App;
