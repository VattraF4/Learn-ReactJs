import classes from "./Post.module.css";
const names = ["Ra Vattra","Yan Pich"];
function Post(props) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.content}>{props.content}</p>
    </li>
  );
}

export default Post;
