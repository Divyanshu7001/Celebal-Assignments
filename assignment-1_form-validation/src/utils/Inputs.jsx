import { inputStyles as styles } from "../utils/styles";
import { validate, countries } from "../utils/validator";

export function Inputs({ form, setForm, errors, setErrors, disableInputs }) {
  if (!form) {
    return null;
  }
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      const updatedForm = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      validate({ form: updatedForm, setErrors });
      return updatedForm;
    });
  };
  
  return (
    <>
      <input
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={!disableInputs ? handleChange : undefined}
        disabled={disableInputs}
        style={styles.input}
      />
      {!disableInputs && errors.firstName && (
        <div style={styles.error}>{errors.firstName}</div>
      )}

      <input
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={!disableInputs ? handleChange : undefined}
        disabled={disableInputs}
        style={styles.input}
      />
      {!disableInputs && errors.lastName && (
        <div style={styles.error}>{errors.lastName}</div>
      )}

      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={!disableInputs ? handleChange : undefined}
        disabled={disableInputs}
        style={styles.input}
      />
      {!disableInputs && errors.username && (
        <div style={styles.error}>{errors.username}</div>
      )}

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={!disableInputs ? handleChange : undefined}
        disabled={disableInputs}
        style={styles.input}
      />
      {!disableInputs && errors.email && (
        <div style={styles.error}>{errors.email}</div>
      )}

      {disableInputs ? (
        <input
          name="password"
          value={form.password}
          disabled={disableInputs}
          style={styles.input}
        />
      ) : (
        <>
          <input
            name="password"
            type={form.showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={!disableInputs ? handleChange : undefined}
            disabled={disableInputs}
            style={styles.input}
          />
          {!disableInputs && errors.password && (
            <div style={styles.error}>{errors.password}</div>
          )}
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="showPassword"
              checked={form.showPassword}
              onChange={!disableInputs ? handleChange : undefined}
              disabled={disableInputs}
              style={{ marginRight: "8px" }}
            />
            Show Password
          </label>
        </>
      )}

      <input
        name="phone"
        placeholder="+91 9876543210"
        value={form.phone}
        onChange={!disableInputs ? handleChange : undefined}
        disabled={disableInputs}
        style={styles.input}
      />

      {!disableInputs && errors.phone && (
        <div style={styles.error}>{errors.phone}</div>
      )}

      {disableInputs ? (
        <>
          <input
            name="country"
            value={form.country}
            disabled={disableInputs}
            style={styles.input}
          />
        </>
      ) : (
        <>
          <select
            name="country"
            value={form.country}
            onChange={!disableInputs ? handleChange : undefined}
            disabled={disableInputs}
            style={styles.select}
          >
            <option value="">Select Country</option>
            {countries &&
              Object.keys(countries).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
          </select>
        </>
      )}

      {!disableInputs && errors.country && (
        <div style={styles.error}>{errors.country}</div>
      )}

      {disableInputs ? (
        <>
          <input
            name="city"
            value={form.city}
            disabled={disableInputs}
            style={styles.input}
          />
        </>
      ) : (
        <>
          <select
            name="city"
            value={form.city}
            onChange={!disableInputs ? handleChange : undefined}
            disabled={disableInputs}
            style={styles.select}
          >
            <option value="">Select City</option>
            {countries &&
              (countries[form.country] || []).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </>
      )}
      {!disableInputs && errors.city && (
        <div style={styles.error}>{errors.city}</div>
      )}

      <input
        name="pan"
        placeholder="ABCDE1234F"
        value={form.pan}
        onChange={!disableInputs ? handleChange : undefined}
        disabled={disableInputs}
        style={styles.input}
      />
      {!disableInputs && errors.pan && (
        <div style={styles.error}>{errors.pan}</div>
      )}

      <input
        name="aadhar"
        placeholder="123412341234"
        value={form.aadhar}
        onChange={!disableInputs ? handleChange : undefined}
        disabled={disableInputs}
        style={styles.input}
      />
      {!disableInputs && errors.aadhar && (
        <div style={styles.error}>{errors.aadhar}</div>
      )}
    </>
  );
}
