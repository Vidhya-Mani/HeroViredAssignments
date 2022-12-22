// import React from 'react';

// class Items extends React.Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return(
//             <div>
//                 <p> Listing items inside Class</p>
//             </div>
//         );
//     }

// }




function Items() {
    return (
      <div className="Tiffin">
        <h2>Drinks</h2>
        <ol>
            <li> Coffee  <button> Rs.20</button></li>
            <li> Tea  <button> Rs.20</button></li>
            <li>Lemon Tea  <button> Rs.20</button></li>
            <li> Boost  <button> Rs.40</button></li>
         </ol>
      </div>
    );
  }

export default Items;