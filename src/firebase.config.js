import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDziyyfZ3uFPwGoYh8srzj0S43LXwPBXQA",
  authDomain: "hiking-rox.firebaseapp.com",
  projectId: "hiking-rox",
  storageBucket: "hiking-rox.appspot.com",
  messagingSenderId: "972403194750",
  appId: "1:972403194750:web:e1f4e5466089da6265d12f",
  measurementId: "G-71B2H3Q1J2",
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apikey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
// };
// console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
