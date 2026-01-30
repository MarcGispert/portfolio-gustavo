import { Container } from '../Container';
import { ProjectCard } from './ProjectCard';
import { Button } from '../Button/Button';

// Placeholder images - replace with actual project images
import heroImg from '../../assets/hero-bike.jpg';
import conceptImg from '../../assets/Concept-Sketching.png';
import engineeringImg from '../../assets/Engineering.png';
import virtualClayImg from '../../assets/virtual-clay .png';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const projects = [
  {
    id: 1,
    title: 'Sport Naked 450',
    category: 'Industrial Design',
    image: heroImg,
    link: '#',
    gridClass: 'md:row-span-2', // Large card - left side
  },
  {
    id: 2,
    title: 'Cafe Racer 750',
    category: 'Concept Design',
    image: conceptImg,
    link: '#',
    gridClass: '', // Regular card - top right
  },
  {
    id: 3,
    title: 'Enduro 650',
    category: 'Engineering',
    image: engineeringImg,
    link: '#',
    gridClass: '', // Regular card - top right
  },
  {
    id: 4,
    title: 'Urban Commuter',
    category: 'Electric Mobility',
    image: virtualClayImg,
    link: '#',
    gridClass: '', // Regular card - bottom right
  },
  {
    id: 5,
    title: 'Racing Prototype',
    category: 'Performance',
    image: conceptImg,
    link: '#',
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
      <div className="p-12 md:py-24">
        <Container className="!px-0">
          <h2 className="mb-0 font-sans text-[52px] font-normal uppercase leading-[1.1] tracking-wide md:mb-4 md:text-[80px]">
            Selected Work
          </h2>
          <p className="hidden max-w-2xl font-sans text-[18px] font-normal text-gray-400 md:block md:text-[18px]">
            A curated selection of motorcycle design projects showcasing innovation and craftsmanship.
          </p>
        </Container>
      </div>

      {/* Asymmetric Grid */}
      <div className="w-full bg-black px-6 md:px-0">
        <Container className="!px-0 md:!px-12">
          <div className="grid auto-rows-[393px] grid-cols-1 gap-0 md:auto-rows-[400px] md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className={`${project.gridClass} h-full w-full pt-6 md:pt-0`}>
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
      <div className="p-12 md:py-24">
        <Container className="!px-0">
          <div className="flex justify-center">
            <Button variant="outline" size="large">
              VIEW ALL PROJECTS
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
