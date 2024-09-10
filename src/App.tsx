import FetchUserList from "./components/FetchUsersList";
import RegistrationForm from "./components/Form";
import Navigation from "./components/Navtigation";
import TodoList from "./components/todoList";

function App() {
  return (
    <>
      <Navigation />
      <TodoList />
      <FetchUserList />
      <RegistrationForm />
    </>
  );
}

export default App;
