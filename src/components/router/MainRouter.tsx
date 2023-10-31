import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Home';
import { InfoMovie } from '../InfoMovie';


export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movieInfo' element={<InfoMovie/>} />
      </Routes>
    </BrowserRouter>
  );
};
