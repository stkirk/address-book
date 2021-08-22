import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="app">
      <ContactForm />
      <br />
      <ContactList />
    </div>
  );
}

export default App;
