// src/utils/firestore.js
import { getFirestore, doc, setDoc, getDoc, arrayUnion } from "firebase/firestore";

const db = getFirestore();

export const savePrescription = async (userId, prescription) => {
  try {
    const userDoc = doc(db, "users", userId);

    // Add the prescription to the 'prescriptions' array field
    await setDoc(
      userDoc,
      { prescriptions: arrayUnion(prescription) },
      { merge: true }
    );

    console.log("Prescription saved successfully.");
  } catch (error) {
    console.error("Error saving prescription:", error);
    throw error;
  }
};

export const fetchPrescriptions = async (userId) => {
    try {
      const userDoc = doc(db, "users", userId);
      const docSnap = await getDoc(userDoc);
  
      if (docSnap.exists()) {
        return docSnap.data().prescriptions || [];
      } else {
        console.log("No such document!");
        return [];
      }
    } catch (error) {
      console.error("Error fetching prescriptions:", error);
      return [];
    }
  };
