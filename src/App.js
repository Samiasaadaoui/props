import 'bootstrap/dist/css/bootstrap.min.css';
import image from "./Images.js/samia.jpg"
import './App.css';
import CardProfile from './Component/CardProfile';


function App( ) {
  const user=
   { img:{image},
    fullname:"Saadaoui Samia",
     profession:"Student at GOMYCODE"}
  
  return (
    <div>
     <CardProfile user={user}/>
    </div>
  );
}

export default App;
