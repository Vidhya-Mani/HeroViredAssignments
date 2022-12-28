import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Social from './components/Social';
import Extra from './components/Extra';
import './components/Content.css';

function App() {
  return (
    <div className="Content">
          <center><Header> </Header></center>
          <Content></Content>
          <Social></Social>
          <Extra></Extra>



    </div>
  );
}

export default App;
