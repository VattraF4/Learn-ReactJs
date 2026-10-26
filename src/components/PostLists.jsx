import classes from "./PostLists.module.css";
import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import GlassButton from "./GlassButton";
function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  // let modalContent;

  // if (modalIsVisible) {
  //   <Modal onClose={hideModalHandler}>
  //     <NewPost
  //       onBodyChange={bodyChangeHandler}
  //       onAuthorChange={authorChangeHandler}
  //     />
  //     {/* <GlassButton>Submit</GlassButton> */}
  //   </Modal>;
  // }
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} content={enteredBody} />
        <Post author="Ra Vattra" content="Hello World!" />
      </ul>
    </>
  );
}

export default PostList;
