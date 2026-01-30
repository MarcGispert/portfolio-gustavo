import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { ProjectCard } from '../../components/SelectedWork/ProjectCard';

// Placeholder images - using existing assets
import heroImg from '../../assets/hero-bike.jpg';
import conceptImg from '../../assets/Concept-Sketching.png';
import engineeringImg from '../../assets/Engineering.png';
import virtualClayImg from '../../assets/virtual-clay .png';

/* ------------------------------------------------------------------ */
/*  Data - 10 projects matching Figma design                          */
/* ------------------------------------------------------------------ */

const projects = [
  // Row 1
  {
    id: 1,
    title: 'GAS GAS',
    category: 'Concept Design',
    image: heroImg,
    link: '#',
    size: 'large', // 2 columns
    desktopGridClass: 'col-span-2',
  },
  {
    id: 2,
    title: 'ITALJET',
    category: 'Engineering',
    image: conceptImg,
    link: '#',
    size: 'small', // 1 column
    desktopGridClass: 'col-span-1',
  },
  // Row 2
  {
    id: 3,
    title: 'GAVARES',
    category: 'Industrial Design',
    image: engineeringImg,
    link: '#',
    size: 'small',
    desktopGridClass: 'col-span-1',
  },
  {
    id: 4,
    title: 'OSSA',
    category: 'Production',
    image: virtualClayImg,
    link: '#',
    size: 'large',
    desktopGridClass: 'col-span-2',
  },
  // Row 3
  {
    id: 5,
    title: 'E-RACER',
    category: 'Electric Mobility',
    image: heroImg,
    link: '#',
    size: 'small',
    desktopGridClass: 'col-span-1',
  },
  {
    id: 6,
    title: 'TORROT Muvi',
    category: 'Urban Mobility',
    image: conceptImg,
    link: '#',
    size: 'small',
    desktopGridClass: 'col-span-1',
  },
  {
    id: 7,
    title: 'TORROT Velocipedo',
    category: 'Innovation',
    image: engineeringImg,
    link: '#',
    size: 'small',
    desktopGridClass: 'col-span-1',
    hideOnMobile: true, // Mobile only shows 8 projects
  },
  // Row 4
  {
    id: 8,
    title: 'FACOMSA',
    category: 'Engineering',
    image: virtualClayImg,
    link: '#',
    size: 'small',
    desktopGridClass: 'col-span-1',
  },
  {
    id: 9,
    title: 'GHION',
    category: 'Concept',
    image: heroImg,
    link: '#',
    size: 'small',
    desktopGridClass: 'col-span-1',
  },
  {
    id: 10,
    title: 'ALPHA BOAR',
    category: 'Performance',
    image: conceptImg,
    link: '#',
    size: 'small',
    desktopGridClass: 'col-span-1',
    hideOnMobile: true, // Mobile only shows 8 projects
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export function Portfolio() {
  return (
    <div className="min-h-screen bg-black">
      <Header variant="dark" />

      {/* Main content - offset for fixed header */}
      <main className="pt-20">
        {/* Title Section */}
        <section className="py-24 text-white md:py-24">
          <Container>
            <div className="flex flex-col gap-8">
              {/* Main Title */}
              <h1 className="font-sans text-[40px] font-normal leading-tight md:text-[65px]">
                PORTFOLIO
              </h1>

              {/* Subtitle */}
              <p className="max-w-3xl font-sans text-[24px] font-semibold leading-normal text-white/90">
                Selected projects spanning concept design, engineering, and production.
              </p>
            </div>
          </Container>
        </section>

        {/* Portfolio Grid Section */}
        <section className="w-full bg-black">
          {/* Desktop Grid: 3 columns × 480px, row height 536px, NO GAPS */}
          {/* Mobile Stack: full width, 536px height, NO GAPS */}
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="grid auto-rows-[536px] grid-cols-1 gap-0 md:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`
                    ${project.desktopGridClass}
                    ${project.hideOnMobile ? 'hidden md:block' : ''}
                    h-full w-full
                  `}
                >
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    link={project.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
