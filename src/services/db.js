import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

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

export default function obtenerProductos(){
  return new Promise((resolve) =>
      {
          setTimeout(() => {
          resolve(products);
          }, 2000);
})};

export function obtenerProductoUnico(itemid){
  let productReq = products.find((product) => {return (product.id === Number(itemid))});
  return new Promise((resolve, reject) =>
      {
          setTimeout(() => {
              if(productReq !== undefined){
                  resolve(productReq);
              } else {
                  reject("Producto no encontrado");
              }
          }, 2000);
})};

export function obtenerProductosPorDivision(divisionid){
  let productsReq = products.filter((product) => {return (product.division === divisionid)});
  return new Promise((resolve, reject) =>
      {
          setTimeout(() => {
              if(productsReq !== undefined){
                  resolve(productsReq);
              } else {
                  reject("División no encontrada");
              }
          }, 2000);
})};
