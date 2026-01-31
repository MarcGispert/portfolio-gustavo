import { Container } from '../Container';
import { Button } from '../Button/Button';
import { ArrowRightCircle } from 'lucide-react';

import conceptSketchingImg from '../../assets/Concept-Sketching.png';
import virtualClayImg from '../../assets/virtual-clay .png';
import engineeringImg from '../../assets/Engineering.png';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const processSteps = [
  {
    title: 'From Idea to Concept',
    description: 'Early design, sketching, and product definition',
  },
  {
    title: 'From Concept to Production-Ready Design',
    description: 'Virtual clay, Class A surfacing, and visual validation',
  },
  {
    title: 'Engineering for Real Manufacturing',
    description: 'Frames, plastics, components, and industrialization',
  },
];

const serviceCards = [
  {
    id: 'concept-sketching',
    title: 'Concept &\nSketching',
    description:
      'Transform ideas into compelling visual concepts through rapid sketching and early-stage design exploration.',
    image: conceptSketchingImg,
    imageAlt: 'Concept sketching process',
    imageFirst: true,
    link: '/services/concept-sketching',
  },
  {
    id: 'virtual-clay',
    title: 'Virtual Clay & Class\nA Surfacing',
    description:
      'Develop production-ready surfaces with precision digital modeling, ensuring aesthetic excellence and manufacturability.',
    image: virtualClayImg,
    imageAlt: 'Virtual clay modeling',
    imageFirst: false,
    link: '/services/virtual-clay-class-a',
  },
  {
    id: 'engineering',
    title: 'Engineering',
    description:
      'Complete engineering solutions from frame design to component development, ready for mass production.',
    image: engineeringImg,
    imageAlt: 'Engineering and manufacturing',
    imageFirst: true,
    link: '/services/engineering',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Services() {
  return (
    <section className="w-full bg-black text-white">
      {/* PART 1: HOW I HELP INTRO */}
      <div className="bg-black py-24 md:pt-24 md:pb-12">
        <Container className="px-6 md:px-12">
          <h2 className="mb-16 font-sans text-[36px] font-semibold uppercase leading-[1.1] tracking-wide md:mb-16 md:text-[80px] md:font-normal">
            How I Help Motorcycle Brands Bring Products to Life
          </h2>

          <ul className="divide-y divide-white/20">
            {processSteps.map((step, index) => (
              <li key={step.title} className={index === 0 ? 'pb-8 md:pb-8' : 'py-8 md:py-8'}>
                <h3 className="mb-4 font-sans text-[30px] font-normal uppercase tracking-[0.075em] leading-[36px] text-white md:text-[24px] md:font-semibold">
                  {step.title}
                </h3>
                <p className="font-sans text-[24px] font-normal text-white md:text-[18px] md:text-gray-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* PART 2: SERVICES HEADER */}
      <div className="bg-black pb-0 pt-0 md:pb-12 md:pt-12">
        <Container className="px-6 md:px-12">
          <h2 className="mb-2 font-sans text-[52px] font-normal uppercase leading-[1.1] tracking-wide md:text-[80px]">
            Services
          </h2>
          <p className="max-w-2xl font-sans text-[18px] font-normal text-gray-400 md:text-[18px]">
            End-to-end motorcycle design and engineering — from first sketch to production line.
          </p>
        </Container>
      </div>

      {/* PART 3: SERVICES GRID (CHECKERBOARD) */}
      <div className="pb-16 md:pb-24">
        <Container className="px-6 md:px-12">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {serviceCards.map((card) => (
              <ServiceCard key={card.id} {...card} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Service Card Component                                             */
/* ------------------------------------------------------------------ */

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFirst: boolean;
  link?: string;
}

function ServiceCard({ title, description, image, imageAlt, imageFirst, link }: ServiceCardProps) {
  const imageBlock = (
    <div className="aspect-square w-full md:aspect-auto md:h-full">
      <img
        src={image}
        alt={imageAlt}
        className="h-full w-full object-cover"
      />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center bg-black p-12 md:p-12 lg:p-16">
      <h3 className="mb-6 whitespace-pre-line font-sans text-[30px] font-normal uppercase leading-[1.2] tracking-wide md:text-[58px]">
        {title}
      </h3>
      <p className="mb-8 max-w-md font-sans text-[18px] font-normal leading-[1.6] text-gray-400 md:text-[18px]">
        {description}
      </p>
      {link ? (
        <a href={link}>
          <Button icon={ArrowRightCircle}>Learn More</Button>
        </a>
      ) : (
        <Button icon={ArrowRightCircle}>Learn More</Button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile: always image first, then text */}
      <div className="md:hidden">
        {imageBlock}
        {textBlock}
      </div>

      {/* Desktop: checkerboard pattern */}
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
    </>
  );
}
