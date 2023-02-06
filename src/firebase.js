import { initializeApp } from "firebase/app";
import { getStorage, ref as refStorage, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as refDB , onValue } from "firebase/database";
import { getFirestore, collection, addDoc, getDocs, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnBLoenB15oBnkzMMcdKxBbyvq3ZB6BPU",
  authDomain: "character-finder-5efb0.firebaseapp.com",
  projectId: "character-finder-5efb0",
  storageBucket: "character-finder-5efb0.appspot.com",
  databaseURL: "https://character-finder-5efb0-default-rtdb.firebaseio.com",
  messagingSenderId: "68287017393",
  appId: "1:68287017393:web:de6842b3186fbb0ab20d90"
};

// Create a reference with an initial file path and name
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);
const leaderboard = getFirestore(app);

export function loadFirebaseStorageImage(path, stateCallback){
    const pathReference = refStorage(storage, path);
    getDownloadURL(pathReference).then((url)=>{
        stateCallback(url)
    })
}

export async function addLeaderBoardData(level, name, score, timeString){
  try {
    const docRef = await addDoc(collection(leaderboard, level), {
      name: name,
      score: score,
      time: timeString,
    });
    return docRef
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getLeaderBoardData(level, stateCallback){
  const querySnapshot = await getDocs(connectFirestoreEmulator(leaderboard, level, 4400));
  let tempArr = [];
  querySnapshot.forEach((doc) => {
    tempArr.push(doc.data())
    //console.log(doc.id, " => ", doc.data());
  });
  //console.log(tempArr)
  stateCallback(tempArr)
}

export function loadFireBaseDatabase () {
  const dbReference = refDB(database, '/levels/')
  let data
  onValue(dbReference, snapshot =>{
    data = snapshot.val()
  }, {onlyOnce: true});
  return data;
}
