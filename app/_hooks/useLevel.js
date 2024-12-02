import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "@/app/_utils/firebase";
import { increaseXpFunc } from "../_functions/xp";

const db = getFirestore(app);

const userRef = collection(db, "users");
const useLevel = (userData) => {
  const updateUserLevel = async (increaseXp) => {
    if (!userData?.uid) {
      console.error("failed to get Data");
      return;
    }

    const docRef = doc(userRef, userData.uid);

    if (userData.xp && userData.requiredXp && userData.level) {
      updateStats(increaseXp, docRef);
      return;
    }

    await setDoc(docRef, {
      ...userData,
      level: 0,
      xp: 0,
      requiredXp: 5,
    }).then(() => {
      updateStats(increaseXp, docRef);
    });
  };

  const updateStats = async (increaseXp, docRef) => {
    const { level, xp, requiredXp } = userData;
    let data = {
      xp: xp ? xp : 0,
      requiredXp: requiredXp ? requiredXp : 5,
      level: level ? level : 0,
    };

    await setDoc(docRef, {
      ...userData,

      ...increaseXpFunc(data, increaseXp),
    });
  };

  return [updateUserLevel];
};

export default useLevel;
