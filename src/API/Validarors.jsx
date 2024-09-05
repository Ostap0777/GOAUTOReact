
export const validateEmail = (email) => {
	const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase()) ? "" : "Invalid email address";
 };

 export const validatePhoneNumber = (phoneNumber) => {
	const valid = /^\+?[0-9]{10,15}$/; 
	return re.test(phoneNumber) ? "" : "Invalid phone number";
 };


 export const validateText = (text, minLength = 1, maxLength = 255) => {
	if (text.length < minLength) {
	  return `Text must be at least ${minLength} characters long`;
	}
	if (text.length > maxLength) {
	  return `Text must be no longer than ${maxLength} characters`;
	}
	return ""; 
 };