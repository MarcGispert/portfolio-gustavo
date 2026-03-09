import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button/Button';
import { ScrollPop } from '../../components/ScrollPop';
import { ArrowRightCircle, Layers, Scan, GitFork, Package, Activity, CircleDot } from 'lucide-react';

import heroImg from '../../assets/hero-bike.jpg';
import engineeringImg from '../../assets/Engineering.png';
import conceptImg from '../../assets/Concept-Sketching.png';
import virtualClayImg from '../../assets/virtual-clay .png';
import engineeringHeroImg from '../../assets/engineering-hero.jpg';
import plasticsRdImg from '../../assets/plastics-rd.png';
import frameDesignImg from '../../assets/frame-design.jpg';
import swingarmImg from '../../assets/swingarm-design.jpg';
import seatsFuelImg from '../../assets/seats-fuel.jpg';
import rimDesignImg from '../../assets/rim-design.jpg';
import suspensionImg from '../../assets/suspension-components.png';

const capabilityIcons = [
  {
    title: 'Plastics R&D',
    description: 'A- and B-side plastics development ready for injection moulding.',
    icon: Layers,
  },
  {
    title: 'Frame Design & FEM',
    description: 'Frame design with FEM optimization and structural validation.',
    icon: Scan,
  },
  {
    title: 'Swingarm Design',
    description: 'Off-road and on-road swingarms, single or double-sided, with advanced tensioning systems.',
    icon: GitFork,
  },
  {
    title: 'Seats & Fuel Systems',
    description: 'Seats, fuel tanks and accessory parts designed for real manufacturing.',
    icon: Package,
  },
  {
    title: 'Suspension Components',
    description: 'Fork clamps and suspension linkages with kinematic and progression optimization.',
    icon: Activity,
  },
  {
    title: 'Rim Design',
    description: 'Scooter rim design for casting, with or without sand cores.',
    icon: CircleDot,
  },
];

const capabilities = [
  {
    id: 1,
    title: 'Plastics R&D',
    description: 'A- and B-side plastics development ready for injection moulding.\nDesign focused on manufacturability, assembly and structural behavior.\nFrom early concept surfaces to production-ready plastic parts.',
    image: plasticsRdImg,
    imageFirst: true,
  },
  {
    id: 2,
    title: 'Frame Design & FEM',
    description: 'Frame design with FEM optimization and structural validation.\nLightweight structures developed through iterative simulation.\nFocused on stiffness, strength and real-world performance.',
    image: frameDesignImg,
    imageFirst: false,
  },
  {
    id: 3,
    title: 'Swingarm Design',
    description: 'Off-road and on-road swingarms, single or double-sided.\nOptimized structures with integrated chain or belt tensioning systems.\nDesigned for strength, weight efficiency and manufacturing feasibility.',
    image: swingarmImg,
    imageFirst: true,
  },
  {
    id: 4,
    title: 'Seats & Fuel Systems',
    description: 'Seats, fuel tanks and accessory parts designed for real manufacturing.\nPackaging-driven design integrated with the vehicle architecture.\nFocused on ergonomics, capacity and production constraints.',
    image: seatsFuelImg,
    imageFirst: false,
  },
  {
    id: 5,
    title: 'Suspension Components',
    description: 'Fork clamps and suspension linkages with kinematic optimization.\nDevelopment of linkage ratios and suspension progression.\nBalanced performance, stiffness and manufacturability.',
    image: suspensionImg,
    imageFirst: true,
  },
  {
    id: 6,
    title: 'Rim Design',
    description: 'Scooter rim design for casting, with or without sand cores.\nStructures optimized for weight, strength and production processes.\nClean geometry suitable for industrial casting workflows.',
    image: rimDesignImg,
    imageFirst: false,
  },
];

export function Engineering() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="light" />

      <main className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[500px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${engineeringHeroImg})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)',
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="mx-auto w-full max-w-[1440px]">
              <h1 className="mb-[10px] font-sans text-[40px] font-normal leading-tight text-white md:text-[65px] md:leading-[79.24px]">
                ENGINEERING
              </h1>
              <p className="font-sans text-[20px] font-semibold leading-tight text-white md:text-[24px] md:leading-[29.26px]">
                From design to manufacturing
              </p>
            </div>
          </div>
        </section>

        {/* Intro Text Block */}
        <section className="w-full bg-white px-6 py-12 md:px-12 md:py-24">
          <Container>
            <p className="max-w-4xl font-sans text-[24px] font-normal leading-[1.2] tracking-[0.063em] text-black md:text-[30px] md:leading-[36px] md:tracking-[1.9px]">
              For TORROT I designed the front train tilting and suspension system of the Velocipedo, as well as the engineering and development of the plastics. I also designed and industrialized many parts of the Muvi Range.
            </p>
          </Container>
        </section>

        {/* Key Capabilities Band */}
        <section className="w-full bg-black px-6 py-16 text-white md:px-12 md:py-24">
          <Container>
            <ScrollPop>
              <h2 className="mb-12 text-center font-sans text-[40px] font-normal leading-tight md:mb-16 md:text-[58px] md:leading-[70.7px]">
                Key capabilities
              </h2>
            </ScrollPop>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
              {capabilityIcons.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div key={capability.title} className="flex flex-col items-center md:items-start">
                    <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-12 w-12 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 text-center font-sans text-[20px] font-semibold uppercase text-white md:text-left md:text-[24px]">
                      {capability.title}
                    </h3>
                    <p className="text-center font-sans text-[16px] font-normal leading-relaxed text-white/90 md:text-left md:text-[18px]">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
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

          {/* Capabilities List */}
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
        <div className="mb-6 flex flex-col gap-3">
          {description.split('\n').filter((l: string) => l.trim()).map((line: string, i: number) => (
            <p key={i} className="font-sans text-[16px] font-normal leading-relaxed text-black md:text-[18px] md:leading-[21.94px]">
              {line}
            </p>
          ))}
        </div>
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
