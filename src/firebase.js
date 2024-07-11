import { initializeApp } from "firebase/app";

const firebaseConfig = {
 apiKey: "AIzaSyAkn-mMmbzuhqskuzCmfVsojOZHO2W7HHg",
 authDomain: "travel-planner-50dbf.firebaseapp.com",
 projectId: "travel-planner-50dbf",
 storageBucket: "travel-planner-50dbf.appspot.com",
 messagingSenderId: "134441686816",
 appId: "1:134441686816:web:869bf28f55c153c0656945",
 measurementId: "G-ZCZEXCLGH2",
};

export const app = initializeApp(firebaseConfig);