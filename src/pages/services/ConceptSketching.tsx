import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button/Button';
import { ScrollPop } from '../../components/ScrollPop';
import { ArrowRightCircle } from 'lucide-react';

// Placeholder images - using existing assets
import heroImg from '../../assets/hero-bike.jpg';
import conceptImg from '../../assets/Concept-Sketching.png';
import engineeringImg from '../../assets/Engineering.png';
import virtualClayImg from '../../assets/virtual-clay .png';
import paperSketchingImg from '../../assets/paper-sketching.jpg';
import rasterImg from '../../assets/2d-raster.jpg';
import vectorImg from '../../assets/2d-vector.jpg';
import aiEnhancingImg from '../../assets/ai-enhancing.png';
import graphicsImg from '../../assets/graphics-interfaces.jpg';

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const capabilities = [
  {
    id: 1,
    title: 'Paper Sketching',
    description: 'Early ideation and fast visual exploration',
    image: paperSketchingImg,
    imageFirst: true,
  },
  {
    id: 2,
    title: '2D Raster',
    description: 'Photoshop and Wacom-based workflows',
    image: rasterImg,
    imageFirst: false,
  },
  {
    id: 3,
    title: '2D Vector',
    description: 'Clean and precise concept definition',
    image: vectorImg,
    imageFirst: true,
  },
  {
    id: 4,
    title: 'AI Enhancing',
    description: 'Fast iterations and visual refinement',
    image: aiEnhancingImg,
    imageFirst: false,
  },
  {
    id: 5,
    title: 'Graphics & Interfaces',
    description: 'Dashboards, UI and product graphics',
    image: graphicsImg,
    imageFirst: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export function ConceptSketching() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="light" />

      {/* Main content - offset for fixed header */}
      <main className="pt-20">
        {/* Hero Section - Full width with image + gradient overlay */}
        <section
          className="relative h-[500px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${conceptImg})` }}
        >
          {/* Gradient Overlay: bottom 80% -> middle 40% -> top 0% black */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)',
            }}
          />

          {/* Hero Text - Positioned at bottom */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="mx-auto w-full max-w-[1440px]">
              <h1 className="mb-[10px] font-sans text-[40px] font-normal leading-tight text-white md:text-[65px] md:leading-[79.24px]">
                CONCEPT & SKETCHING
              </h1>
              <p className="font-sans text-[20px] font-semibold leading-tight text-white md:text-[24px] md:leading-[29.26px]">
                Where ideas take shape
              </p>
            </div>
          </div>
        </section>

        {/* Intro Text Block */}
        <section className="w-full bg-white px-6 py-12 md:px-12 md:py-24">
          <Container>
            <p className="max-w-4xl font-sans text-[24px] font-normal leading-[1.2] tracking-[0.063em] text-black md:text-[30px] md:leading-[36px] md:tracking-[1.9px]">
              Large experience in early product definition and concept development, helping brands
              transform ideas into clear, feasible and distinctive motorcycle concepts.
            </p>
          </Container>
        </section>

        {/* Capabilities Section */}
        <section className="w-full bg-white py-16 md:py-24">
          {/* Section Title */}
          <div className="mb-12 px-6 md:px-12">
            <Container>
              <ScrollPop>
                <h2 className="font-sans text-[40px] font-normal leading-tight text-black md:text-[58px] md:leading-[70.7px]">
                  Key Capabilities
                </h2>
              </ScrollPop>
            </Container>
          </div>

          {/* Capabilities List - No Container, full-bleed */}
          <div className="mx-auto w-full max-w-[1440px]">
            {capabilities.map((capability) => (
              <CapabilityEntry key={capability.id} {...capability} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Capability Entry Component                                        */
/* ------------------------------------------------------------------ */

interface CapabilityEntryProps {
  title: string;
  description: string;
  image: string;
  imageFirst: boolean;
}

function CapabilityEntry({ title, description, image, imageFirst }: CapabilityEntryProps) {
  const imageBlock = (
    <div className="relative h-[300px] w-full overflow-hidden rounded-sm shadow-sm md:h-[541px] md:w-1/2">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      {/* Subtle grey overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/[0.06]" />
    </div>
  );

  const textBlock = (
    <div className="flex w-full items-center justify-start bg-white p-8 md:w-1/2 md:p-16">
      <div className="max-w-[592px]">
        {/* Title */}
        <h3 className="mb-4 font-sans text-[36px] font-normal leading-tight text-black md:text-[58px] md:leading-[70.7px]">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-6 font-sans text-[16px] font-normal leading-relaxed text-black md:text-[18px] md:leading-[21.94px]">
          {description}
        </p>

        {/* CTA Button */}
        <Button variant="text" icon={ArrowRightCircle}>Learn more</Button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row">
      {/* Mobile: always image first */}
      <div className="md:hidden">
        {imageBlock}
        {textBlock}
      </div>

      {/* Desktop: alternating pattern */}
      <div className="hidden md:contents">
        {imageFirst ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </div>
  );
}
