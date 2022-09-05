import "../styles/globals.css";
import TodoList from "./components/TodoList";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <TodoList />
    </>
  );
}

export default MyApp;
