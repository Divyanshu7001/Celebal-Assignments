export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePhone = (phone) => /^\+\d{1,4}\s\d{10}$/.test(phone);
export const validatePAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
export const validateAadhar = (aadhar) => /^\d{12}$/.test(aadhar);

export const countries = {
  India: ["Delhi", "Mumbai", "Bangalore"],
  USA: ["New York", "Los Angeles", "Chicago"],
};

export const validate = ({ form, setErrors }) => {
  const newErrors = {};
  if (!form.firstName.trim()) newErrors.firstName = "Required";
  if (!form.lastName.trim()) newErrors.lastName = "Required";
  if (!form.username.trim()) newErrors.username = "Required";
  if (!validateEmail(form.email)) newErrors.email = "Invalid email";
  if (!form.password) newErrors.password = "Required";
  if (!validatePhone(form.phone)) newErrors.phone = "Format: +CC xxxxxxxxxx";
  if (!form.country) newErrors.country = "Select country";
  if (!form.city) newErrors.city = "Select city";
  if (!validatePAN(form.pan)) newErrors.pan = "Invalid PAN (ABCDE1234F)";
  if (!validateAadhar(form.aadhar))
    newErrors.aadhar = "Aadhar must be 12 digits";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
