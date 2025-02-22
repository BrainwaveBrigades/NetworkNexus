import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export const getUserRole = async () => {
  const user = auth.currentUser;
  if (!user) return null;

  const userDoc = await getDoc(doc(db, "users", user.uid));
  return userDoc.exists() ? userDoc.data().role : null;
};
