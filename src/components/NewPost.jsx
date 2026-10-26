import GlassButton from "./GlassButton";
import classes from "./NewPost.module.css";
import Modal from "./Modal";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={5} onChange={props.onBodyChange} />
      </p>
      <GlassButton>Submit</GlassButton>
    </form>
  );
}

export default NewPost;
