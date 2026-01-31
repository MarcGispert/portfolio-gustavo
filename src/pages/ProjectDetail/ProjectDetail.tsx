import { useParams, Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { projects } from '../../data/projects';

// Placeholder images - using existing assets
import heroImg from '../../assets/hero-bike.jpg';
import conceptImg from '../../assets/Concept-Sketching.png';
import engineeringImg from '../../assets/Engineering.png';
import virtualClayImg from '../../assets/virtual-clay .png';

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.slug === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header variant="light" />
        <main className="pt-20">
          <Container>
            <div className="py-24 text-center">
              <h1 className="mb-4 text-4xl font-bold">Project not found</h1>
              <Link to="/portfolio" className="text-blue-600 hover:underline">
                Back to portfolio
              </Link>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  const placeholderImages = [heroImg, conceptImg, engineeringImg, virtualClayImg];
  const heroImage = project.heroImage || placeholderImages[0];
  const gallery = project.galleryImages || [placeholderImages[1], placeholderImages[2], placeholderImages[3]];
  const mainImage = gallery[0];
  const galleryImages = [gallery[1], gallery[2]];
  const paragraphs = project.description.split('\n').filter(p => p.trim());
  return (
    <div className="min-h-screen bg-white">
      <Header variant="light" />

      {/* Main content - offset for fixed header */}
      <main className="pt-20">
        {/* Hero Section - Full width with image + gradient overlay */}
        <section
          className="relative h-[500px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Gradient Overlay: 80% -> 40% -> 0% black, top to bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)',
            }}
          />

          {/* Hero Text - Positioned at bottom */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="mx-auto w-full max-w-[1440px]">
              <h1 className="mb-[10px] font-sans text-[65px] font-normal leading-[79.235px] text-white">
                {project.title}
              </h1>
              <p className="font-sans text-[24px] font-semibold leading-[29.256px] text-white">
                {project.tags[0]}
              </p>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="w-full bg-white py-12">
          <Container className="px-6 md:px-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 font-sans text-[18px] font-normal leading-[21.942px] text-[#0A0A0A] transition-colors hover:text-gray-600"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All projects
            </Link>
          </Container>
        </section>

        {/* Content Section - 2 columns on Desktop, stacked on Mobile */}
        <section className="w-full bg-white pb-12">
          <Container className="px-6 md:px-12">
            <div className="flex flex-col gap-0 md:flex-row md:gap-12">
              {/* LEFT COLUMN - Image Gallery (Desktop) / Stacked Images (Mobile) */}
              <div className="flex w-full flex-col gap-12 md:w-[762px] md:gap-[10px] md:pr-0">
                {/* Main Large Image */}
                <div className="h-auto w-full overflow-hidden md:h-[677px]">
                  <img
                    src={mainImage}
                    alt={`${project.title} main`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Two Small Images - Side by side on Desktop, stacked on Mobile */}
                <div className="flex flex-col gap-12 md:flex-row md:gap-[10px]">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="h-auto w-full overflow-hidden md:h-[356px] md:w-[356px]"
                    >
                      <img
                        src={image}
                        alt={`${project.title} gallery ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN - Text Content */}
              <div className="mt-12 w-full md:mt-0 md:w-[678px] md:pl-0">
                <div className="flex flex-col gap-6">
                  {/* Project Title */}
                  <h2 className="font-sans text-[58px] font-normal leading-[70.702px] text-black">
                    {project.title}
                  </h2>

                  {/* Body Paragraphs */}
                  <div className="flex flex-col gap-6">
                    {paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="font-sans text-[18px] font-normal leading-[21.942px] text-black"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
