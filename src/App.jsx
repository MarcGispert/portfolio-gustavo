import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { ProjectDetail } from './pages/ProjectDetail';
import { ConceptSketching, VirtualClayClassA, Engineering } from './pages/services';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/services/concept-sketching" element={<ConceptSketching />} />
        <Route path="/services/virtual-clay-class-a" element={<VirtualClayClassA />} />
        <Route path="/services/engineering" element={<Engineering />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
