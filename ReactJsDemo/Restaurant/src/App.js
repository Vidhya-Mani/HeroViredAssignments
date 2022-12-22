import logo from './logo.svg';
import './App.css';
import Menuheading from './components/Menuheading';
import Tiffin from './components/Tiffin';
import Foodname from './components/Foodname';
import Cart from './components/Cart';
import Chinese from './components/Chinese';
import Items from './components/Items';
import Customer from './components/Customer';


function App() {
  const arr1 = [
    {
      name: "Iddiyapam",
      price: "80",
      type: "Veg"
    },
    {
      name: "Prawn Biryani",
      price: "300",
      type: "Non-veg"
    }
  ]
  const drinks =[
    {
      name:"Cold Coffee",
      price: "20",
      type: "Cold"
    },
    {
      name:"Tea",
      price: "10",
      type: "Hot"
    },
    {
      name:"Lemon Tea",
      price: "20",
      type: "Hot"
    },{
      name:"Apple Milkshake",
      price: "150",
      type: "Cold"
    }
  ]
  return (
    <div className="App">
      <h1> <center><b>Welcome to Vidhya's kitchen!</b></center></h1>
      <Menuheading title="Main Course"> </Menuheading>
      <Tiffin item="Idli" price="40"> </Tiffin>
      <Tiffin item="Dosa" price="50"> </Tiffin>
      <Tiffin item="Roti" price="60"> </Tiffin>
      <Tiffin item={arr1[0].name} price = {arr1[0].price} type={arr1[0].type}></Tiffin>
      <Tiffin item={arr1[1].name} price={arr1[1].price} type={arr1[1].type}></Tiffin>
      {drinks.map(i => <Tiffin item={i.name} price={i.price} type={i.type}></Tiffin>)}
      {/* <Menuheading title="Tiffin"> </Menuheading> */}
      <Chinese> </Chinese>
      {/* <Items> </Items> */}
      {/* <Customer> </Customer> */}
      {/* <Foodname></Foodname> */}
      <Cart></Cart>
    </div>
  );
}

export default App;
