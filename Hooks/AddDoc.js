import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config";

export const addDoc = async(screen)=>{

    const docRef = doc(db, "screenTrack", "0");
    await updateDoc(docRef, {
      screen: screen
    });
}