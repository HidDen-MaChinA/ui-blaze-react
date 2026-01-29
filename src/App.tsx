import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './not_found';
import { LandingPage } from './pages/LandingPage';
import "./i18n";
import FormsPage from './pages/FormsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forms" element={<FormsPage/>} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
