const validate = (name, email, pass) => {
  if (name === "") {
    alert("Name is required");
    return false;
  }

  if (email === "") {
    alert("Email is required");
    return false;
  }
  if (!email.includes("@")) {
    alert("Email must contain @");
    return false;
  }

  if (pass === "") {
    alert("Password is required");
    return false;
  }
  if (pass.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  // Check if password has at least one number
  let hasNumber = false;
  for (let i = 0; i < pass.length; i++) {
    if (!isNaN(pass[i])) {
      hasNumber = true;
      break;
    }
  }
  if (!hasNumber) {
    alert("Password must contain at least one number");
    return false;
  }

  alert("Validation successful!");
  return true;
};

export default validate;
