const baseUrl = process.env.NODE_ENV === "production" 
? 'https://cordovalearning.com:3000' 
: 'http://localhost:3000';

export default baseUrl;