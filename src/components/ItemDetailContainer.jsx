import ItemDetail from "./ItemDetail"
import {useState, useEffect} from "react"
import {getFirestore, collection, getDocs} from "firebase/firestore";


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
    useEffect(()=> {
      const db = getFirestore();
      const clothesCollection = collection(db, "prendas");
      getDocs(clothesCollection).then((querySnapshot)=> {
        const clothes = querySnapshot.docs.map((doc)=> ({
           ...doc.data(),
           id: doc.id,
        }));
        setProduct(clothes);
      })
    }, [])
    
  return (
    <>
   <ItemDetail clothes={product}/>
    </>
  )
}

export default ItemDetailContainer