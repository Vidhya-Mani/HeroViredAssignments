import { useState } from "react";


function Cart(){
    const [numb, setNum] = useState(1)
    const [mm, setmm] = useState("Vidhya")

    return(
        <>
        <h1>FunNum: {numb}</h1>
        <h1>Name: {mm}</h1>
        <button onClick={() => setNum(numb+1)}>Increase</button>
        <button onClick={() => setNum(numb-1)}>Decrease</button>
        <button onClick={() => setmm("Mani")}>Change Name</button>

        </>
    )
}

export default Cart;