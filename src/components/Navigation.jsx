import { scroller } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navigation() {
  const navigate = useNavigate();
  const [scrollTarget, setScrollTarget] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

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

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={`ud-header py-5 lg:py-0 absolute left-0 top-0 z-40 flex w-full items-center  ${
        isScrolled ? 'sticky lg:text-dark' : 'bg-transparent lg:text-white'
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <h1
              className={`text-2xl font-bold ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              Indonesia<span className="text-primary">Ku</span>
            </h1>
          </div>
          <div className="flex w-full items-center justify-between px-10">
            <div className='px-10'>
              <button
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                onClick={handleMenuClick}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right top-full ${
                  showMenu ? 'block' : 'hidden'
                } w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent  lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6`}
              >
                <ul className="block lg:flex 2xl:ml-20">
                  <li className="group relative">
                    <button
                      onClick={() => handleScrollLinkClick('home')}
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-medium group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text lg:group-hover:text lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Beranda
                    </button>
                  </li>
                  <li className="group relative">
                    <button
                      onClick={() => handleScrollLinkClick('about')}
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-medium group-hover:text-primary dark:text lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text lg:group-hover:text lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Tentang
                    </button>
                  </li>
                  <li className="group relative">
                    <button
                      onClick={() => handleScrollLinkClick('team')}
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-medium group-hover:text-primary dark:text lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text lg:group-hover:text lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Team
                    </button>
                  </li>
                  <li className="group relative">
                    <button
                      onClick={() => handleScrollLinkClick('contact')}
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-medium group-hover:text-primary dark:text lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text lg:group-hover:text lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Kontak
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <div className={`hidden sm:flex`}>
                <Link
                  to={'/destination'}
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-[10px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                >
                  Jelajahi Indonesia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
