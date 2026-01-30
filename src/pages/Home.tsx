import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { SelectedWork } from '../components/SelectedWork';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header variant="light" />
      <Hero />
      <Services />
      <SelectedWork />
      <Footer />
    </div>
  );
}
