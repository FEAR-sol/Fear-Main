const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === 'string' && regex.test(email.trim());
};

module.exports = validateEmail;
