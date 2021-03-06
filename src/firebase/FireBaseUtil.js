import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config={
    apiKey: "AIzaSyD3sp-MwQxrksYnZhZ9VaFFhhIIf4tQDPY",
    authDomain: "salva-shopping.firebaseapp.com",
    databaseURL: "https://salva-shopping.firebaseio.com",
    projectId: "salva-shopping",
    storageBucket: "salva-shopping.appspot.com",
    messagingSenderId: "612241201711",
    appId: "1:612241201711:web:7e8fe8eb0567e080ae84da",
    measurementId: "G-L4BPT43C71"
  };
  firebase.initializeApp(config);

export const auth= firebase.auth()
export const firestore= firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const siginwithGoogle = ()=> auth.signInWithPopup(provider)

export const createUserProfile=async (AuthId, additionalData)=>{
        if (!AuthId) {
          return
        }
        const userRef =firestore.doc(`Users/${AuthId.uid}`)
        const refSnap =await userRef.get()

        if (!refSnap.exists) {
          const{displayName,email }=AuthId
          const createdAt = new Date()

          try {
            await userRef.set({displayName,email,createdAt,...additionalData})
          } catch (error) {
            console.log(error.message)
          }
        }

        return userRef;

}



export default firebase
