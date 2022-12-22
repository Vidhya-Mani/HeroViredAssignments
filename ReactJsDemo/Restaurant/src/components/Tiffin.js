import { findAllInRenderedTree } from 'react-dom/test-utils'
import './Tiffin.css'

function Tiffin(props) {
  const buy = () =>{
    alert("Item purchased")
  }
  if(props.type == "Veg" || props.type == "Cold"){
    return (
      <div className= "Tiffin">
        <p>
          {props.item}------Veg----<button onClick={buy}> + INR{props.price} </button> 
        </p>
                {/* <right>
          <ol>
           <li> Idli  <button> Rs.40</button></li>
            <li> Dosa <button> Rs.60</button></li>
            <li> Poori <button> Rs.70</button></li>
            <li> Pongal <button> Rs.50</button></li>
          </ol>
        </right> */}
      </div>
    )
  }else{
    // if(props.type =="Veg" || props.type=="Cold"){
      return (
        <div className="Red">
          <p>
            {props.item}------Non-Veg--------<button onClick={buy}> + INR{props.price}</button> 
          </p>
        </div>
    // }
       )
  }

}

export default Tiffin;