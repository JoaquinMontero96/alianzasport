import { initializeApp } from "firebase/app";
import { doc, getDoc, collection, getDocs, query, where, addDoc, getFirestore, orderBy } from "firebase/firestore";
import products from "../data/products";

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
	const q = query(productsCollection, orderBy("club"));
	const snapshot = await getDocs(q);
	const dataDocs = snapshot.docs.map(item => ({...item.data(), id: item.id}));
	return dataDocs;
};

export async function obtenerProductosPorMarca(marcaid){
	const productsCollection = collection(db, "products");
	const q =  query(productsCollection, where("marca", "==", marcaid));
	const snapshot = await getDocs(q);
	const dataDocs = snapshot.docs.map(item => ({...item.data(), id: item.id}));
	return dataDocs;
};

export async function createBuyOrder(order) {
	const ordersCollection = collection(db, "orders")
	const orderDoc = await addDoc(ordersCollection, order);
	return orderDoc.id;
}

export async function exportData() {
	const productsCollection = collection(db, "products");
	for (let item of products) {
		addDoc(productsCollection, item);
	}
}