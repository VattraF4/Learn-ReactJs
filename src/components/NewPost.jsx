import GlassButton from "./GlassButton";
import classes from "./NewPost.module.css";

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
      <p className={classes.actions}>
        <GlassButton>Submit</GlassButton>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </p>
    </form>
  );
}

export default NewPost;
