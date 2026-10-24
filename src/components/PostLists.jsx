import classes from "./PostLists.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="John Doe" content="This is a sample post." />
        <Post author="John Doe" content="This is a sample post." />
        <Post author="John Doe" content="This is a sample post." />
      </ul>
    </>
  );
}

export default PostList;
