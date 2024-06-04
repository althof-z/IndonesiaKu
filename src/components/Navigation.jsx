import { scroller } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navigation() {
  const navigate = useNavigate();
  const [scrollTarget, setScrollTarget] = useState(null);

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
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="index.html" className="navbar-logo block w-full py-5">
              <img
                src="assets/images/logo/logo-white.svg"
                alt="logo"
                className="header-logo w-full"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
              >
                <ul className="blcok lg:flex 2xl:ml-20">
                  <li className="group relative">
                    <RouterLink
                      to="/"
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Home
                    </RouterLink>
                  </li>
                  <li className="group relative">
                    <button
                      onClick={() => handleScrollLinkClick('about')}
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      About
                    </button>
                  </li>
                  <li className="group relative">
                    <button
                      onClick={() => handleScrollLinkClick('team')}
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Team
                    </button>
                  </li>
                  <li className="group relative">
                    <button
                      onClick={() => handleScrollLinkClick('contact')}
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <div className="hidden sm:flex">
                <RouterLink
                  to="/login"
                  className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                >
                  Sign In
                </RouterLink>

                <RouterLink
                  to="/register"
                  className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                >
                  Sign Up
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
