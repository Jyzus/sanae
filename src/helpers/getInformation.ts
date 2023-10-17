import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const getInformation = async (url: string) => {
  const collectionRef = collection(FirebaseDB, url);
  const docs = await getDocs(collectionRef);

  const data: any = [];
  docs.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};
