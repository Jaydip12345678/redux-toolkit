import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Secondcom from './components/secondcom';
import Third from './components/third';
import Loginpage from './components/Loginpage';
import RouteAuthGuard from './comman/RouteAuthGuard';
import RouteAuthGuard2 from './comman/RouteAuthGuard2';
import PageNotFound from './comman/PageNotFound';
import Courses from './components/Courses';
import Team from './components/Team';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PageTop from './comman/PageTop';
// import './components/commen.css'

function App() {
  return (
    <BrowserRouter>
      <PageTop />
      <Routes>
        <Route path="/" element={<RouteAuthGuard> <Loginpage /> </RouteAuthGuard>} />
        <Route path="/home" element={<RouteAuthGuard2 > <Home /> </RouteAuthGuard2>} />
        <Route path="/2" element={<RouteAuthGuard2 > <Secondcom /> </RouteAuthGuard2>} />
        <Route path="/3" element={<RouteAuthGuard2 > <Third /> </RouteAuthGuard2>} />
        <Route path="/courses" element={<RouteAuthGuard2 > <Courses /> </RouteAuthGuard2>} />
        <Route path="/team" element={<RouteAuthGuard2 > <Team /> </RouteAuthGuard2>} />
        <Route path="/about" element={<RouteAuthGuard2 > <AboutUs /> </RouteAuthGuard2>} />
        <Route path="/contact" element={<RouteAuthGuard2 > <ContactUs /> </RouteAuthGuard2>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
