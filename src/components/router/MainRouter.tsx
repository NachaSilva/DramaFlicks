import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Home';
import { InfoMovie } from '../InfoMovie';
import { Accion } from '../Accion';
import { Romance } from '../Romance';
import { Drama } from '../Drama';
import { Comedia } from '../Comedia';
import { Suspenso } from '../Suspenso';
import { ErrorRoute } from '../ErrorRoute';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movieInfo' element={<InfoMovie />} />
        <Route path='/action' element={<Accion />} />
        <Route path='/suspense' element={<Suspenso />} />
        <Route path='/comedy' element={<Comedia />} />
        <Route path='/drama' element={<Drama />} />
        <Route path='/romantic' element={<Romance />} />
        <Route path='*' element={<ErrorRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
