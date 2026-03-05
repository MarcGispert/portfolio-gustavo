import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { Button } from '../components/Button/Button';
import { ScrollPop } from '../components/ScrollPop';

// Placeholder for avatar image
import avatarPlaceholder from '../assets/Gustavo_bn2.jpg';

// Company logos
import logoOssa from '../assets/logo-ossa.png';
import logoGasgas from '../assets/logo-gasgas.png';
import logoBtwice from '../assets/logo-btwice.png';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="light" />

      <main className="pt-20">
        {/* Top Section - White background with bio */}
        <section className="w-full bg-white px-6 py-16 md:px-12 md:py-24">
          <Container>
            <div className="flex flex-col items-start gap-12 md:flex-row md:gap-12">
              {/* Left: Avatar */}
              <div className="flex-shrink-0">
                <div className="h-[200px] w-[200px] overflow-hidden rounded-full md:h-[280px] md:w-[280px]">
                  <img
                    src={avatarPlaceholder}
                    alt="Gustavo Pedro Higón Botet"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Right: Bio content */}
              <div className="flex-1">
                {/* Name */}
                <ScrollPop>
                  <h1 className="mb-4 font-sans text-[40px] font-normal leading-tight text-black md:text-[58px] md:leading-[70.7px]">
                    Gustavo Pedro Higón Botet
                  </h1>
                </ScrollPop>

                {/* Subtitle */}
                <ScrollPop delay={100}>
                  <p className="mb-6 font-sans text-[20px] font-semibold leading-tight text-black md:text-[24px] md:leading-[29.26px]">
                    Motorcycle design engineer, rider and enthusiast
                  </p>
                </ScrollPop>

                {/* Bullet points */}
                <ScrollPop delay={200}>
                  <ul className="mb-6 space-y-2">
                    <li className="font-sans text-[16px] font-normal text-black md:text-[18px]">
                      • Born in 1984
                    </li>
                    <li className="font-sans text-[16px] font-normal text-black md:text-[18px]">
                      • Based in Valencia
                    </li>
                    <li className="font-sans text-[16px] font-normal text-black md:text-[18px]">
                      • Native Spanish and Catalan speaker, fluent in English
                    </li>
                  </ul>
                </ScrollPop>

                {/* Divider */}
                <hr className="my-6 border-t border-black/20" />

                {/* Paragraphs */}
                <ScrollPop delay={300}>
                  <div className="space-y-4">
                    <p className="font-sans text-[16px] font-normal leading-relaxed text-black md:text-[18px]">
                      Degree in product design engineering by the Universitat Politècnica de València,
                      specializing in Design for Leisure and Automotive.
                    </p>
                    <p className="font-sans text-[16px] font-normal leading-relaxed text-black md:text-[18px]">
                      Honors in the final project, for the design of a high performance electric motorcycle.
                    </p>
                  </div>
                </ScrollPop>
              </div>
            </div>
          </Container>
        </section>

        {/* Key Capabilities Section - Dark background with timeline */}
        <section className="w-full bg-black px-6 py-16 text-white md:px-12 md:py-24">
          <Container>
            {/* Section Title */}
            <ScrollPop>
              <h2 className="mb-12 font-sans text-[40px] font-normal leading-tight md:mb-16 md:text-[58px] md:leading-[70.7px]">
                Experience
              </h2>
            </ScrollPop>

            {/* Timeline */}
            <div className="space-y-8">
              {/* Entry 1: OSSA */}
              <div className="flex flex-col gap-4 border-b border-white/20 pb-8 md:flex-row md:items-start md:gap-12">
                <div className="md:w-1/4">
                  <p className="font-sans text-[20px] font-semibold leading-tight md:text-[24px]">
                    2010–2014
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-sans text-[24px] font-normal leading-tight text-white md:text-[30px] md:leading-[36px]">
                    Engineer and Responsible
                    <br />
                    for style in OSSA
                  </h3>
                  <p className="font-sans text-[16px] font-normal text-white/80 md:text-[18px]">
                    OSSA
                  </p>
                </div>
                <div className="md:w-1/5">
                  <img src={logoOssa} alt="OSSA" className="h-auto w-24" />
                </div>
              </div>

              {/* Entry 2: GAS GAS */}
              <div className="flex flex-col gap-4 border-b border-white/20 pb-8 md:flex-row md:items-start md:gap-12">
                <div className="md:w-1/4">
                  <p className="font-sans text-[20px] font-semibold leading-tight md:text-[24px]">
                    2014–2015
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-sans text-[24px] font-normal leading-tight text-white md:text-[30px] md:leading-[36px]">
                    Engineer and Responsible
                    <br />
                    for style in the OSSA projects in Gas Gas
                  </h3>
                  <p className="font-sans text-[16px] font-normal text-white/80 md:text-[18px]">
                    GAS GAS
                  </p>
                </div>
                <div className="md:w-1/5">
                  <img src={logoGasgas} alt="GAS GAS" className="h-auto w-24" />
                </div>
              </div>

              {/* Entry 3: BTWICE */}
              <div className="flex flex-col gap-4 pb-8 md:flex-row md:items-start md:gap-12">
                <div className="md:w-1/4">
                  <p className="font-sans text-[20px] font-semibold leading-tight md:text-[24px]">
                    2015–2025
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-sans text-[24px] font-normal leading-tight text-white md:text-[30px] md:leading-[36px]">
                    Head of product and design
                  </h3>
                  <p className="font-sans text-[16px] font-normal text-white/80 md:text-[18px]">
                    BTWICE
                  </p>
                </div>
                <div className="md:w-1/5">
                  <img src={logoBtwice} alt="BTWICE" className="h-auto w-24" />
                </div>
              </div>
            </div>

            {/* Currently Box */}
            <div className="mt-12 border border-white/20 bg-black/50 p-6 md:p-8">
              <p className="mb-2 font-sans text-[12px] font-normal uppercase tracking-wider text-white/60 md:text-[14px]">
                Currently:
              </p>
              <p className="font-sans text-[24px] font-normal leading-tight text-white md:text-[30px] md:leading-[36px]">
                Offering my services as a freelance
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section - White background */}
        <section className="w-full bg-white px-6 py-16 md:px-12 md:py-24">
          <Container>
            <div className="text-center">
              <h2 className="mb-8 font-sans text-[40px] font-normal leading-tight text-black md:text-[58px] md:leading-[70.7px]">
                Available for freelance motorcycle design and engineering projects.
              </h2>
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
                <a href="#contact">
                  <Button variant="primary">Get in touch</Button>
                </a>
                <a href="/services/concept-sketching">
                  <Button variant="outline">View services</Button>
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
