export const formStyles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  heading: { textAlign: "center", marginBottom: "20px" },
  button: {
    width: "100%",
    padding: "10px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
  buttonDisabled: {
    background: "#ccc",
    cursor: "not-allowed",
  },
};

export const inputStyles = {
  input: {
    width: "100%",
    padding: "8px 10px",
    margin: "8px 0",
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
  },
  select: {
    width: "100%",
    padding: "8px 10px",
    margin: "8px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    background: "#fff",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    margin: "8px 0",
    fontSize: "14px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "-4px",
    marginBottom: "8px",
  },
};
