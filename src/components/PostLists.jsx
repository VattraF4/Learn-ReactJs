import classes from "./PostLists.module.css";
import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
function PostList({ isPosting, onStopPosting}) {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
      
        <Post author="Ra Vattra" content="Hello World!" />
      </ul>
    </>
  );
}

export default PostList;
