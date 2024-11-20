import { useState, useEffect } from "react";

import Product from "./Product";
import Skeleton from "./Skeleton";




export const ProductCard = () => {
    const [listOfProduct, setListOfProduct] = useState([]);

    const [filterProduct, setFilterProduct] = useState([]);

    const [searchText, setSearchText] = useState("");



    //data fetching from api using useefect 
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const resData = await data.json();
        console.log(resData);
        setListOfProduct(resData);
        setFilterProduct(resData);
    }
    console.log("product render");

    //      //conditonal rendering
    //    if(listOfProduct.length === 0){
    //     return <Skeleton />
    //    }  




    return listOfProduct.length === 0 ? <Skeleton /> : (
        <div>
            <div style={{ "marginTop": "10px" }}>
                <input type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText}
                />
                <button onClick={() => {
                    const filteredData = listOfProduct.filter((Product) => {
                        return Product.title.toLowerCase().includes(searchText.toLowerCase());
                    });
                    setFilterProduct(filteredData);
                }}>Search</button>
            </div>
            <button onClick={() => {

                // button use usestate hook for filtering  products having rating more than 4

                const filterdProduct = listOfProduct.filter(product => product.rating.rate >= 4);
                setListOfProduct(filterdProduct);


            }} style={{ "marginTop": "10px" }}>Top rated product</button>

            <div className='product_card'>
                {filterProduct.map((product) => {
                    return (
                        <Product key={product.id} product={product} />
                    )
                })
                }
            </div>
        </div>
    )
}
