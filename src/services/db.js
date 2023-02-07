import { initializeApp } from "firebase/app";
import { doc, getDoc, collection, getDocs, query, where, getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDvhK07D95snNHHk-S30-H8m5GJ8-VFk7s",
	authDomain: "alianzasport-bba5f.firebaseapp.com",
	projectId: "alianzasport-bba5f",
	storageBucket: "alianzasport-bba5f.appspot.com",
	messagingSenderId: "395552567360",
	appId: "1:395552567360:web:8ef139a69dd976b8692fa5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function obtenerProductoUnico(itemid){
	const docRef = doc(db, "products", itemid);
	const snapshot = await getDoc(docRef);
	return {...snapshot.data(), id: snapshot.id};
};

export async function obtenerProductos(){
	const productsCollection = collection(db, "products");
	const snapshot = await getDocs(productsCollection);
	const dataDocs = snapshot.docs.map(item => ({...item.data(), id: item.id}));
	return dataDocs;
};

export async function obtenerProductosPorDivision(divisionid){
	const productsCollection = collection(db, "products");
	const q =  query(productsCollection, where("division", "==", divisionid));
	const snapshot = await getDocs(q);
	const dataDocs = snapshot.docs.map(item => ({...item.data(), id: item.id}));
	return dataDocs;
};
