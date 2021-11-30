import "./styles.css";
import { Form } from "./form/form.js";
import { DisplayTask } from "./display/displayTasks.js";
import QuoteMaker from "./components/quoteMaker.js";
import Footer from "./components/footer.js";
export default function App() {
  return (
    <div className="main-container">
      <QuoteMaker />
      <Form />
      <DisplayTask />
      <Footer />
    </div>
  );
}
