const baseUrl = process.env.NODE_ENV === "production" 
// ? 'https://next-test-xgvt.onrender.com'
? ''
: 'http://localhost:3000';

export default baseUrl;