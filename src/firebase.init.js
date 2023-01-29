import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAyWbAdjH011souYO1Zl0jddVq2NGfKAH8",
	authDomain: "power-house-point.firebaseapp.com",
	projectId: "power-house-point",
	storageBucket: "power-house-point.appspot.com",
	messagingSenderId: "1005132490820",
	appId: "1:1005132490820:web:3d7f5d0dd1bdbbcb997411"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;