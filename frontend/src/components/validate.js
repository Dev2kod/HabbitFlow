const validate = (name, email, pass) => {
  // Trim values to avoid accidental spaces
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPass = pass.trim();

  // Name validation
  if (!trimmedName) {
    alert("Name is required");
    return false;
  }
  if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
    alert("Name should only contain letters and spaces");
    return false;
  }

  // Email validation
  if (!trimmedEmail) {
    alert("Email is required");
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Password validation
  if (!trimmedPass) {
    alert("Password is required");
    return false;
  }
  if (trimmedPass.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }
  if (!/[0-9]/.test(trimmedPass)) {
    alert("Password must contain at least one number");
    return false;
  }

  // If all checks pass
  alert("Validation successful!");
  return true;
};

export default validate;
