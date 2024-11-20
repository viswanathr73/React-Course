import { useState } from "react";




const Navbar = () => {
    // let btnName = "Light"; // normal js variable
    const [btnName, setbtnName] = useState("Light")   //button click will change the writing light and dark
    return (
        <div className='navbar'>
            <h1>LOGO</h1>
            <ul className='menu_items'>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>CART</li>
                <button onClick={() => {
                    btnName === "Light" ? setbtnName("Dark") : setbtnName("Light")   //btnName = "Dark"

                }}>{btnName}</button>
            </ul>

        </div >
    )
}


export default Navbar;