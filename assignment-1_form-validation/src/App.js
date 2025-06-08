import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./form/Form";
import Success from "./success/Success";

function App() {
  const appStyles = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={appStyles}>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
