import './App.css';
import './image.css';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import ImageUpload from './components/ImageUpload';
import { useState } from 'react';

function App() {


  //fetchUsers();
  //fetchImages();
  
  const [user, setUser] = useState({"_id":{"$oid":"63735476c45a0c96d278035e"},"name":"cam","email":"cam_va@yahoo.co.uk","__v":{"$numberInt":"0"}});
  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <ImageUpload />
      <ImageGallery/>
    </div>
  );
}

export default App;
