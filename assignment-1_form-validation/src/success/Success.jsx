import { useLocation, useNavigate } from "react-router-dom";
import { formStyles as styles } from "../utils/styles";
import { Inputs } from "../utils/Inputs";
export default function Success() {
  const { state } = useLocation();
  const navigate = useNavigate();  
  if (!state) {
    navigate("/");
    return null;
  }
  const submittedForm = state;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Form Submission Successful</h2>
      <Inputs form={submittedForm} disableInputs={true} />
      <button onClick={() => navigate("/")} style={styles.button}>
        ← Back to form
      </button>
    </div>
  );
}
