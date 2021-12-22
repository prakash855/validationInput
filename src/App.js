import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const onChangeHandler = (fieldnumber, value) => {
    if (fieldnumber === "number") {
      setNumber(value);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (number > 20) {
      alert("Not validated");
    } else if (number < 0) {
      alert("Not validated");
    } else {
      setNumber("");
      alert("validated");
    }
  };
  return (
    <div classnumber="App">
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <input
          type="number"
          value={number}
          onChange={(e) => {
            onChangeHandler("number", e.target.value);
          }}
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
