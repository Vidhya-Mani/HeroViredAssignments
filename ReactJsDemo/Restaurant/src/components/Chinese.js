import {useState} from "react";

function Chinese() {
  const[nu, setNu] = useState(0)
  const[pri,setPri] = useState(0)
    return (
      <div className="Tiffin">
        <h3>Chinese Items: {nu}</h3>
        <h3>Price of Items:{pri}</h3>

        <ol>
            <li> Fried Rice  <button onClick={() => [setNu(nu+1), setPri(pri+ 140)]}> Rs.140</button></li>
            <li> Noodles  <button onClick={() => [setNu(nu+1), setPri(pri+ 150)]}> Rs.150</button></li>
            <li>Malai Kofta  <button onClick={() => [setNu(nu+1), setPri(pri +130)]}> Rs.130</button></li>
            <li> Butter Naan  <button onClick={() => [setNu(nu+1), setPri(pri+ 40)]}> Rs.40</button></li>
         </ol>
      </div>
    );
  }




export default Chinese;