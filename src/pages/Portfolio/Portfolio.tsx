import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { ProjectCard } from '../../components/SelectedWork/ProjectCard';
import { ScrollPop } from '../../components/ScrollPop';
import { projects as projectsData } from '../../data/projects';

/* ------------------------------------------------------------------ */
/*  Grid Layout Configuration                                         */
/* ------------------------------------------------------------------ */

const gridLayout = [
  { slug: 'gas-gas', desktopGridClass: 'md:col-span-2', hideOnMobile: false },
  { slug: 'italjet', desktopGridClass: 'md:col-span-1', hideOnMobile: false },
  { slug: 'gavares', desktopGridClass: 'md:col-span-1', hideOnMobile: false },
  { slug: 'ossa', desktopGridClass: 'md:col-span-2', hideOnMobile: false },
  { slug: 'e-racer-rugged', desktopGridClass: 'md:col-span-1', hideOnMobile: false },
  { slug: 'vertigo', desktopGridClass: 'md:col-span-1', hideOnMobile: false },
  { slug: 'torrot', desktopGridClass: 'md:col-span-1', hideOnMobile: false },
  { slug: 'facomsa', desktopGridClass: 'md:col-span-1', hideOnMobile: false },
  { slug: 'ghion', desktopGridClass: 'md:col-span-1', hideOnMobile: false },
  { slug: 'alpha-boar', desktopGridClass: 'md:col-span-1', hideOnMobile: false },
];

const projects = projectsData.map((project) => {
  const layout = gridLayout.find(l => l.slug === project.slug) || { desktopGridClass: 'col-span-1', hideOnMobile: false };
  return {
    ...project,
    image: project.heroImage || project.galleryImages?.[0],
    category: project.tags[0],
    ...layout,
  };
});

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
          <Container className="px-6 md:px-12">
            <div className="flex flex-col gap-8">
              {/* Main Title */}
              <ScrollPop>
                <h1 className="font-sans text-[40px] font-normal leading-tight md:text-[65px]">
                  PORTFOLIO
                </h1>
              </ScrollPop>

              {/* Subtitle */}
              <ScrollPop delay={100}>
                <p className="max-w-3xl font-sans text-[24px] font-semibold leading-normal text-white/90">
                  Selected projects spanning concept design, engineering, and production.
                </p>
              </ScrollPop>
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
                  key={project.slug}
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
                    link={`/project/${project.slug}`}
                    subtitle={project.subtitle}
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
