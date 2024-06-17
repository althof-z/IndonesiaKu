function TeamSection() {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Anggota Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Tim Kami
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                <img
                  src="../../../img/yondra.JPG"
                  alt="team image"
                  className="h-[120px] w-[120px] rounded-full object-cover"
                />
                <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
              </div>
              <div className="text-center">
                <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                  Yondra Septian
                </h4>
                <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                  Front-End Developer
                </p>

              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                <img
                  src="../../../img/image.JPG"
                  alt="team image"
                  className="h-[120px] w-[120px] rounded-full"
                />
                <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
              </div>
              <div className="text-center">
                <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                  M. Hasbi Al Qusyairi
                </h4>
                <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                   Back-End Developer
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                <img
                  src="../../../img/althof.png"
                  alt="team image"
                  className="h-[120px] w-[120px] rounded-full"
                />
                <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
              </div>
              <div className="text-center">
                <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                  Althof Zijan Putra Viandhi
                </h4>
                <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                  Front-End Developer
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
