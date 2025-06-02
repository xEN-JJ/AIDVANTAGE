// Required field
export const required = (val) =>
  val && val.trim() !== "" ? null : "This field is required.";

// Minimum character length
export const minLength = (min) => (val) =>
  val && val.length >= min ? null : `Minimum length is ${min} characters.`;

// Maximum character length
export const maxLength = (max) => (val) =>
  val && val.length <= max ? null : `Maximum length is ${max} characters.`;

// Numbers only
export const isNumber = (val) =>
  /^\d+$/.test(val) ? null : "Only numeric values are allowed.";

// Valid email
export const isEmail = (val) =>
  /^\S+@\S+\.\S+$/.test(val) ? null : "Enter a valid email address.";

// Match another field (useful for password confirmation)
export const matches =
  (compareTo, fieldName = "field") =>
  (val) =>
    val === compareTo ? null : `This must match the ${fieldName}.`;
