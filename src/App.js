import { Routes, Route } from 'react-router-dom';
import './css/App.css';

import Navebarrr from './js/Header/Navebarr';
import Home from './js/Home/Home';
import AboutPages from './js/Zpages/AboutPages';
import ActivityPage from './js/Zpages/ActivityPAge';
import AccomodationPage from './js/Zpages/AccomodationPage';
import ContectPage from './js/Zpages/ContectPage';
import GalleryPage from './js/Zpages/GalleryPage';
import Whatsappicon from './js/Whatsappicon/Whatsappicon';
import EventP from './js/Zpages/EventP';
// import MetaTags from 'react-meta-tags';
import Page404 from './js/Page404';


function App() {
  return (
    <>
    <Navebarrr/>
    <Whatsappicon/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/family-farmhouse-wada' element={<AboutPages/>}/>
      <Route path='/best-farmstay-wada' element={<ActivityPage/>}/>
      <Route path='/farmhouse-events-wada' element={<EventP/>}/>
      <Route path='/farmhouse-private-pool' element={<AccomodationPage/>}/>
      <Route path='/private-farmhouse-wada' element={<GalleryPage/>}/>
      <Route path='/farmstay-near-wada' element={<ContectPage/>}/>
      <Route path='*' element={<Page404 />} />
    </Routes>
    
    
    </>
  );
}

export default App;
