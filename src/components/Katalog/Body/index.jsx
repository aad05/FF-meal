import "./App.css";

import DropFileInput from "./component/DropFileInput";

function Upload() {
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <div className="container">
      <div className="box">
        <DropFileInput onFileChange={(files) => onFileChange(files)} />
      </div>
    </div>
  );
}

export default Upload;
