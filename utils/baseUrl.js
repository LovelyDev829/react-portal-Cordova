const baseUrl = process.env.NODE_ENV === "production" 
? 'https://next-test-xgvt.onrender.com'
// ? 'https://react-portal-cordova.vercel.app'
: 'http://localhost:3000';

export default baseUrl;