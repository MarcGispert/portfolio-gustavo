import { Container } from '../Container';
import { ProjectCard } from './ProjectCard';
import { Button } from '../Button/Button';
import { ScrollPop } from '../ScrollPop';
import { ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const projects = [
  {
    id: 1,
    title: 'GAS GAS',
    category: 'Featured',
    image: '/images/projects/gas-gas/gas-gas04.jpg',
    link: '/project/gas-gas',
    gridClass: 'md:row-span-2', // Large card - left side
  },
  {
    id: 2,
    title: 'ITALJET',
    category: 'Featured',
    image: '/images/projects/italjet/02.jpg',
    link: '/project/italjet',
    gridClass: '', // Regular card - top right
  },
  {
    id: 3,
    title: 'OSSA',
    category: 'Featured',
    image: '/images/projects/ossa/01.jpg',
    link: '/project/ossa',
    gridClass: '', // Regular card - top right
  },
  {
    id: 4,
    title: 'GAVARES',
    category: 'Featured',
    image: '/images/projects/gavares/03.jpg',
    link: '/project/gavares',
    gridClass: '', // Regular card - bottom right
  },
  {
    id: 5,
    title: 'E-RACER',
    category: 'Featured',
    image: '/images/projects/e-racer-rugged/02.jpg',
    link: '/project/e-racer-rugged',
    gridClass: '', // Regular card - bottom right
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function SelectedWork() {
  return (
    <section className="w-full bg-black text-white">
      {/* Header */}
      <div className="px-6 py-6 md:px-12 md:py-24">
        <Container className="!px-0">
          <ScrollPop>
            <h2 className="mb-0 font-sans text-[52px] font-normal uppercase leading-[1.1] tracking-wide md:mb-4 md:text-[80px]">
              Selected Work
            </h2>
          </ScrollPop>
          <ScrollPop delay={100}>
            <p className="hidden max-w-2xl font-sans text-[18px] font-normal text-gray-400 md:block md:text-[18px]">
              A curated selection of motorcycle design projects showcasing innovation and craftsmanship.
            </p>
          </ScrollPop>
        </Container>
      </div>

      {/* Asymmetric Grid */}
      <div className="w-full bg-black px-6 md:px-0">
        <Container className="!px-0 md:!px-12">
          <div className="grid auto-rows-[393px] grid-cols-1 gap-0 md:auto-rows-[400px] md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className={`${project.gridClass} h-full w-full pt-3 md:pt-0`}>
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* View All Projects Button */}
      <div className="px-6 py-6 md:px-12 md:py-24">
        <Container className="!px-0">
          <div className="flex justify-center">
            <Link to="/portfolio">
              <Button variant="text" icon={ArrowRightCircle}>
                VIEW ALL PROJECTS
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
