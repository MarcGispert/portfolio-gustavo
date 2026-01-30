import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button/Button';

import heroImg from '../../assets/hero-bike.jpg';
import virtualClayImg from '../../assets/virtual-clay .png';
import conceptImg from '../../assets/Concept-Sketching.png';
import engineeringImg from '../../assets/Engineering.png';

const capabilities = [
  {
    title: 'Virtual clay models',
    description: 'Early ideation and fast visual exploration',
  },
  {
    title: 'Rendering',
    description: '(still and 360º videos)',
  },
  {
    title: 'Virtual reality',
    description: 'Models for review using VR headsets',
  },
  {
    title: 'Class A surfacing',
    description: 'Ready for engineering',
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
                VIRTUAL CLAY & CLASS A SURFACING
              </h1>
              <p className="font-sans text-[20px] font-semibold leading-tight text-white md:text-[24px] md:leading-[29.26px]">
                Where ideas take shape
              </p>
            </div>
          </div>
        </section>

        {/* Intro Split Block - Yellow/Gold tone */}
        <section className="w-full bg-[#D4A574] px-6 py-16 md:px-12 md:py-24">
          <Container>
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="w-full md:w-1/2">
                <img src={virtualClayImg} alt="Virtual clay process" className="h-auto w-full object-cover md:h-[368px]" />
              </div>
              <div className="w-full md:w-1/2">
                <p className="font-sans text-[24px] font-normal leading-[1.2] tracking-[0.063em] text-white md:text-[30px] md:leading-[36px] md:tracking-[1.9px]">
                  I have developed and refined a set of techniques for virtual clay modeling and Class A surfacing, helping brands achieve production-ready surfaces with precision and aesthetic excellence.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Key Capabilities */}
        <section className="w-full bg-black px-6 py-16 text-white md:px-12 md:py-24">
          <Container>
            <h2 className="mb-12 text-center font-sans text-[40px] font-normal leading-tight md:mb-16 md:text-[58px] md:leading-[70.7px]">
              Key capabilities
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="flex flex-col">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                    <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-sans text-[20px] font-semibold text-white md:text-[24px]">
                    {capability.title}
                  </h3>
                  <p className="font-sans text-[16px] font-normal leading-relaxed text-white/90 md:text-[18px]">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Projects Section - Comparison Rows */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="mb-12 px-6 md:px-12">
            <Container>
              <h2 className="font-sans text-[40px] font-normal leading-tight text-black md:text-[58px] md:leading-[70.7px]">
                Selected Virtual Clay & Class A Surfacing Projects
              </h2>
            </Container>
          </div>

          <Container>
            <div className="space-y-16 md:space-y-24">
              {projectComparisons.map((project) => (
                <div key={project.id}>
                  <h3 className="mb-8 font-sans text-[36px] font-normal leading-tight text-black md:text-[48px]">
                    {project.title}
                  </h3>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                    <div>
                      <img src={project.leftImage} alt={project.leftCaption} className="mb-4 h-auto w-full object-cover" />
                      <p className="font-sans text-[16px] font-normal text-black md:text-[18px]">{project.leftCaption}</p>
                    </div>
                    <div>
                      <img src={project.rightImage} alt={project.rightCaption} className="mb-4 h-auto w-full object-cover" />
                      <p className="font-sans text-[16px] font-normal text-black md:text-[18px]">{project.rightCaption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
