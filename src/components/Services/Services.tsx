import { Container } from '../Container';
import { Button } from '../Button/Button';
import { ScrollPop } from '../ScrollPop';
import { ArrowRightCircle } from 'lucide-react';

import conceptSketchingImg from '../../assets/Concept-Sketching.png';
import virtualClayImg from '../../assets/virtual-clay .png';
import engineeringImg from '../../assets/Engineering.png';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

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
      {/* SERVICES HEADER */}
      <div className="bg-black pb-0 pt-12 md:pb-12 md:pt-24">
        <Container className="px-6 md:px-12">
          <ScrollPop>
            <h2 className="mb-2 font-sans text-[52px] font-normal uppercase leading-[1.1] tracking-wide md:text-[80px]">
              Services
            </h2>
          </ScrollPop>
          <ScrollPop delay={100}>
            <p className="max-w-2xl font-sans text-[18px] font-normal text-gray-400 md:text-[18px]">
              End-to-end motorcycle design and engineering — from first sketch to production line.
            </p>
          </ScrollPop>
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
    <div className="flex flex-col justify-center bg-black p-12 pt-12 md:p-12 lg:p-16">
      <h3 className="mb-6 whitespace-pre-line font-sans text-[30px] font-normal uppercase leading-[1.2] tracking-wide md:text-[58px]">
        {title}
      </h3>
      <p className="mb-8 max-w-md font-sans text-[18px] font-normal leading-[1.6] text-gray-400 md:text-[18px]">
        {description}
      </p>
      {link ? (
        <a href={link}>
          <Button variant="text" icon={ArrowRightCircle}>Learn More</Button>
        </a>
      ) : (
        <Button variant="text" icon={ArrowRightCircle}>Learn More</Button>
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
