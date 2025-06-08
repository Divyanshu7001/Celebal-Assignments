import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "../utils/validator";
import { formStyles as styles } from "../utils/styles";
import { Inputs } from "../utils/Inputs";
export default function Form() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    showPassword: false,
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate({ form, setErrors })) {
      navigate("/success", { state: form });
    }
  };

  const isDisabled = Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <h2 style={styles.heading}>Registration Form</h2>

      <Inputs
        form={form}
        setForm={setForm}
        errors={errors}
        setErrors={setErrors}
        disableInputs={false}
      />

      <button
        type="submit"
        style={{
          ...styles.button,
          ...(isDisabled && styles.buttonDisabled),
        }}
        disabled={isDisabled}
      >
        Submit
      </button>
    </form>
  );
}
