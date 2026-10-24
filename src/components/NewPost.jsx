import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost() {
  const useStateData = useState("");

  // legacy way to access the useState data
  useStateData[0]; // Current state snapshot
  useStateData[1]; // Function to update the state

  // modern way to access the useState data
  const [enteredBody, setEnteredBody] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);  // snapshot and update the state with the new value
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={5} onChange={changeBodyHandler} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>

      <p>{enteredBody}</p>
    </form>
  );
}

export default NewPost;
