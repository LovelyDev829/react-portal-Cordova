const baseUrl = process.env.NODE_ENV === "production" 
? 'https://cordovalearning.onrender.com'
: 'http://localhost:3000';

export default baseUrl;