import { Container } from '../Container';
import { ScrollPop } from '../ScrollPop';
import heroBike from '../../assets/hero-bike.jpg';

/* ------------------------------------------------------------------ */
/*  Hero Component                                                     */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section className="w-full bg-white py-24 md:py-24">
      <Container className="px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Top branding text */}
          <ScrollPop delay={0}>
            <div className="mb-4 md:mb-4">
              <p className="font-sans text-[24px] font-semibold uppercase tracking-[0.2em] text-[#555] md:text-[18px] md:font-normal md:text-black">
                Gustavo Higón
              </p>
              <p className="font-sans text-[24px] font-semibold uppercase tracking-[0.2em] text-[#555] md:text-[18px] md:font-normal md:text-black">
                Motorcycle Design
              </p>
            </div>
          </ScrollPop>

          {/* Subtitle */}
          <ScrollPop delay={100}>
            <p className="mb-24 font-sans text-[24px] uppercase tracking-[0.15em] text-[#555] md:mb-12 md:text-[16px] md:text-gray-400">
              Services and Portfolio
            </p>
          </ScrollPop>

          {/* Hero image */}
          <ScrollPop delay={200}>
            <div className="mb-12 w-full md:mb-12">
              <img
                src={heroBike}
                alt="Motorcycle handlebar front view"
                className="mx-auto h-auto w-full max-w-[1200px] object-contain"
              />
            </div>
          </ScrollPop>

          {/* Main headline - Using H1 typography tokens */}
          <ScrollPop delay={300}>
            <h1 className="mb-12 max-w-4xl font-sans text-[40px] font-normal leading-[1.2] text-black md:mb-8 md:text-[65px]">
              I'm Gustavo, a motorcycle design engineer with 15+ years of experience, providing end-to-end development from concept to production.
            </h1>
          </ScrollPop>
        </div>
      </Container>
    </section>
  );
}
