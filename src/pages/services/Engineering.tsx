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

const capabilities = [
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

const projects = [
  {
    id: 1,
    title: 'TORROT MUVI — INDUSTRIALIZATION',
    tags: ['Industrialization', 'Production Engineering'],
    description: 'Engineering and industrialization of production-ready components',
    image: engineeringImg,
    imageFirst: true,
  },
  {
    id: 2,
    title: 'GAVARES LITE — INTEGRATED MOTOR & SWINGARM',
    tags: ['Integrated Architecture', 'Electric Powertrain'],
    description: 'Integrated motor and swingarm engineering for electric scooter architecture',
    image: conceptImg,
    imageFirst: false,
  },
  {
    id: 3,
    title: 'TORROT VELOCÍPEDO',
    tags: ['Suspension Engineering', 'Plastics R&D'],
    description: 'Front train tilting system and plastics engineering',
    image: virtualClayImg,
    imageFirst: true,
  },
  {
    id: 4,
    title: 'TORROT VELOCÍPEDO',
    tags: ['Plastics R&D', 'Mechanical Layout'],
    description: 'Front train tilting system and plastics engineering',
    image: heroImg,
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
          style={{ backgroundImage: `url(${heroImg})` }}
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

        {/* Intro Split Block */}
        <section className="w-full bg-[#656567] px-6 py-16 md:px-12 md:py-24">
          <Container>
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="w-full md:w-1/2">
                <img src={engineeringImg} alt="Engineering process" className="h-auto w-full object-cover md:h-[368px]" />
              </div>
              <div className="w-full md:w-1/2">
                <p className="font-sans text-[24px] font-normal leading-[1.2] tracking-[0.063em] text-white md:text-[30px] md:leading-[36px] md:tracking-[1.9px]">
                  TORROT Velocipedo I designed the front train tilting and suspension system, as well as the engineering and development of the plastics
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Key Capabilities */}
        <section className="w-full bg-black px-6 py-16 text-white md:px-12 md:py-24">
          <Container>
            <ScrollPop>
              <h2 className="mb-12 text-center font-sans text-[40px] font-normal leading-tight md:mb-16 md:text-[58px] md:leading-[70.7px]">
                Key capabilities
              </h2>
            </ScrollPop>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div key={capability.title} className="flex flex-col items-center md:items-start">
                    <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-12 w-12 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 text-center font-sans text-[20px] font-semibold text-white md:text-left md:text-[24px]">
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

        {/* Projects Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="mb-12 px-6 md:px-12">
            <Container>
              <ScrollPop>
                <h2 className="font-sans text-[40px] font-normal leading-tight text-black md:text-[58px] md:leading-[70.7px]">
                  Selected Engineering Projects
                </h2>
              </ScrollPop>
            </Container>
          </div>

          <div className="mx-auto w-full max-w-[1440px]">
            {projects.map((project) => (
              <ProjectEntry key={project.id} {...project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

interface ProjectEntryProps {
  title: string;
  tags: string[];
  description: string;
  image: string;
  imageFirst: boolean;
}

function ProjectEntry({ title, tags, description, image, imageFirst }: ProjectEntryProps) {
  const imageBlock = (
    <div className="h-[300px] w-full md:h-[541px] md:w-1/2">
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </div>
  );

  const textBlock = (
    <div className="flex w-full items-center justify-start bg-white p-8 md:w-1/2 md:p-16">
      <div className="max-w-[592px]">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[12px] font-normal leading-tight text-[#333333] md:text-[14px] md:leading-[17.07px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-4 font-sans text-[36px] font-normal leading-tight text-black md:text-[58px] md:leading-[70.7px]">
          {title}
        </h3>
        <p className="mb-6 font-sans text-[16px] font-normal leading-relaxed text-black md:text-[18px] md:leading-[21.94px]">
          {description}
        </p>
        <Button variant="text" icon={ArrowRightCircle}>Learn more</Button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:hidden">
        {imageBlock}
        {textBlock}
      </div>
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
