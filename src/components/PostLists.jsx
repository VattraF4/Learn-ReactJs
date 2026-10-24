import classes from "./PostLists.module.css";
import {useState} from  "react";
import Post from "./Post";
import NewPost from "./NewPost";
function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} content={enteredBody} />
      </ul>
    </>
  );
}

export default PostList;
