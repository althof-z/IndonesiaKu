import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

function Footer() {
  const [scrollTarget, setScrollTarget] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollTarget) {
      scroller.scrollTo(scrollTarget, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70,
      });
      setScrollTarget(null);
    }
  }, [scrollTarget]);

  const handleScrollLinkClick = (target) => {
    navigate('/');
    setScrollTarget(target);
  };

  return (
    <footer className="wow fadeInUp relative z-10 bg-[#090E34] pt-12 lg:pt-[400px]" data-wow-delay=".15s">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          {/* First section (start) */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2">
            <div className="mb-10 w-full">
              <Link to="/" className="mb-6 inline-block max-w-[400px]">
                <h1 className="text-2xl font-bold text-white">
                  Indonesia<span className="text-primary">Ku</span>
                </h1>
              </Link>
              <p className="mb-8 max-w-[400px] text-base text-gray-7">
                At IndonesiaKu, we leverage technology to craft engaging digital
                experiences that unlock the wonders of Indonesian culture and
                travel for you.
              </p>
            </div>
          </div>
          {/* End of first section */}

          {/* Second section (end) */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 self-end">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                About Us
              </h4>
              <ul>
                <li onClick={() => handleScrollLinkClick('home')}>
                  <p className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                    Beranda
                  </p>
                </li>
                <li  onClick={() => handleScrollLinkClick('features')}>
                  <p className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                    Layanan
                  </p>
                </li>
                <li onClick={() => handleScrollLinkClick('about')}>
                  <p className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                    Tentang Kami
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* End of second section */}
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="border-t border-[#8890A4] border-opacity-40 py-8 text-center">
        <p className="text-base text-gray-7">
          © Copyright IndonesiaKu, designed by team capstone <b>C624-PS032</b>
        </p>
      </div>
      {/* End of footer bottom section */}
    </footer>
  );
}

export default Footer;
