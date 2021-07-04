import firebase from "firebase/app"
import "firebase/auth"

let app;

if (!firebase.apps.length) {
	app = firebase.initializeApp({
		apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_API_KEY}`,
		authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
		projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
		storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
		messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}`,
		appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
		measurementId: `${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`
	})
} else {
	app = firebase.app(); // if already initialized, use that one
}

export const auth = app.auth()
export default app;