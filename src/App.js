import './App.css';
import {Switch, Route} from "react-router-dom"
import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'
import PhotosRamdon from './pages/PhotosRandom'



function App() {
  return (
    <div className="App">  
       <Header /> 
       <Switch>
                <Route exact path='/'>
                    <Photos />
                </Route>
                <Route  path='/cart'>
                    <Cart />
                </Route>
                <Route  path='/random'>
                    <PhotosRamdon />
                </Route>
        </Switch>
    </div>
  );
}
export default App;
