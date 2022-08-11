export const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const LOGIN_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
