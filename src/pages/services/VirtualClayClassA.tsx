import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button/Button';
import { ScrollPop } from '../../components/ScrollPop';
import { ArrowRightCircle, Box, Camera, View, PenTool } from 'lucide-react';

import heroImg from '../../assets/hero-bike.jpg';
import virtualClayImg from '../../assets/virtual-clay .png';
import conceptImg from '../../assets/Concept-Sketching.png';
import engineeringImg from '../../assets/Engineering.png';
import virtualClayModelsImg from '../../assets/virtual-clay-models.png';
import renderingImg from '../../assets/rendering.jpg';
import virtualRealityImg from '../../assets/virtual-reality.jpg';
import classASurfacingImg from '../../assets/class-a-surfacing.png';

const capabilityIcons = [
  {
    title: 'Virtual Clay Models',
    description: 'Early ideation and fast visual exploration',
    icon: Box,
  },
  {
    title: 'Rendering',
    description: 'Still and 360º videos',
    icon: Camera,
  },
  {
    title: 'Virtual Reality',
    description: 'Models for review using VR headsets',
    icon: View,
  },
  {
    title: 'Class A Surfacing',
    description: 'Ready for engineering',
    icon: PenTool,
  },
];

const capabilities = [
  {
    id: 1,
    title: 'Virtual Clay Models',
    description: 'Early ideation and fast visual exploration',
    image: virtualClayModelsImg,
    imageFirst: true,
  },
  {
    id: 2,
    title: 'Rendering',
    description: 'Still and 360º videos',
    image: renderingImg,
    imageFirst: false,
  },
  {
    id: 3,
    title: 'Virtual Reality',
    description: 'Models for review using VR headsets',
    image: virtualRealityImg,
    imageFirst: true,
  },
  {
    id: 4,
    title: 'Class A Surfacing',
    description: 'Ready for engineering',
    image: classASurfacingImg,
    imageFirst: false,
  },
];

const projectComparisons = [
  {
    id: 1,
    title: 'Gavares Lite',
    leftImage: virtualClayImg,
    leftCaption: 'Gavares Lite Virtual Clay render',
    rightImage: conceptImg,
    rightCaption: 'Gavares Lite prototype',
  },
  {
    id: 2,
    title: 'WOTTAN NSL',
    leftImage: engineeringImg,
    leftCaption: 'Initial virtual clay model',
    rightImage: heroImg,
    rightCaption: 'Final Class A surfacing',
  },
  {
    id: 3,
    title: 'Urban Concept',
    leftImage: conceptImg,
    leftCaption: 'Early stage virtual clay',
    rightImage: virtualClayImg,
    rightCaption: 'Production-ready surfaces',
  },
];

export function VirtualClayClassA() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="light" />

      <main className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[500px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${virtualClayImg})` }}
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
                VIRTUAL CLAY & CLASS A SURFACING
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
              I have developed and refined a set of techniques for virtual clay modeling and Class A surfacing, helping brands achieve production-ready surfaces with precision and aesthetic excellence.
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
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
