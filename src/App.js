import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Firstcomponents from '../src/components/firstcomponents';
import Secondcom from './components/secondcom';
import Third from './components/third';
import Loginpage from './components/Loginpage';
import RouteAuthGuard from './comman/RouteAuthGuard';
import RouteAuthGuard2 from './comman/RouteAuthGuard2';
import PageNotFound from './comman/PageNotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <RouteAuthGuard>
            <Loginpage />
          </RouteAuthGuard>
        } />

        <Route path="/1" element={
          <RouteAuthGuard2 >
            <Firstcomponents />
          </RouteAuthGuard2>
        } />
        <Route path="/2" element={
          <RouteAuthGuard2 >
            <Secondcom />
          </RouteAuthGuard2>} />
        <Route path="/3" element={
          <RouteAuthGuard2 >
            <Third />
          </RouteAuthGuard2>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
