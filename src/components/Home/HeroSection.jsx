import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div
      id="home"
      className="relative overflow-hidden bg-opacity-20 bg-dark pt-[120px] md:pt-[130px] lg:pt-[160px] h-screen"
    >
      <img
        src="../../../img/eugenia-clara-_QTeGT478_8-unsplash.jpg"
        alt="background"
        className="absolute top-0 left-0 z-[-1] object-cover h-screen w-screen"
      />
      <div className="container mt-16">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2] flex flex-col">
                Selamat datang di{' '}
                <span className="text-primary ">Indonesiaku</span>
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                Indonesiaku adalah platform yang didedikasikan untuk
                memperkenalkan keindahan dan keragaman Indonesia kepada dunia.
                Jelajahi destinasi wisata di provinsi - provinsi dan galeri foto yang
                menginspirasi.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <Link
                    to={'/destination'}
                    className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                  >
                    Explore now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
