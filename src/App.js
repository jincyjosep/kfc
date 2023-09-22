import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'  //for css
import 'bootstrap/dist/js/bootstrap.bundle.min.js'  //for carosal, collapse functionality etc
import NavBar from './components/navBar/NavBar';
import 'jquery/dist/jquery.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'  //To use Bootstrap icons
// import 'jquery/dist/jquery.min.js';

function App() {
  return (
    <div>
      <NavBar/>
    </div>
  );
}

export default App;
