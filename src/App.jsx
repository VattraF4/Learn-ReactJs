import "./App.css";
import GlassButton from "./components/GlassButton";
import PostList from "./components/PostLists"
import Post from "./components/Post";

function App() {
  return (
    <main>
      <PostList />
      <GlassButton>Click Here</GlassButton>
    </main>
  );
}

export default App;
