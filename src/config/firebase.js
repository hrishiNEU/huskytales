
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {getFirestore, setDoc, doc, collection, query, where, getDocs} from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAJQBqFci-A6yZ4EybwUr8y7oVOQhZCzQc",
  authDomain: "husky-chat-6c913.firebaseapp.com",
  projectId: "husky-chat-6c913",
  storageBucket: "husky-chat-6c913.firebasestorage.app",
  messagingSenderId: "792771293924",
  appId: "1:792771293924:web:f7c0f67d38caf68382b2f1",
  measurementId: "G-Q4QM70C8FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore(app);

const signup = async (username, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Go Huskies",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatsData:[]
        })
    }catch(error){
        console.error("Firebase Error:",error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch (error){
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async () => {
    try{
        await signOut(auth)
    }catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
    
}

const resetPass = async (email) => {
    if (!email) {
        toast.error("Enter correct email");
        return null;
    }
    try {
        const userRef = collection(db, 'users');
        const q = query(userRef,where("email","==",email));
        const querySnap = await getDocs(q);
        if (!querySnap) {
            await sendPasswordResetEmail(auth,email);
            toast.success("Reset email sent")
        }
        else{
            toast.error("Email not register")
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
}

export {signup, login, logout, auth, db, resetPass}