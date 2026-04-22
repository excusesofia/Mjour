import MainLayout from './layout/MainLayout';
import HomeContent from './pages/desktop/HomeDesk';
import AboutSection from './pages/desktop/AboutDesk';
import './index.css'

function App() {
  return (
    <MainLayout>
      <HomeContent />
      <AboutSection />
    </MainLayout>
  );
}

export default App;