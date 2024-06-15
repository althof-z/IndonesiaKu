import Navigation from '../components/destination/Nav';

export default function DetailPage() {
  return (
    <div>
      <Navigation />
      <div className="container pt-20 flex flex-col justify-around sm:flex-row">
        <img
          className="rounded-lg h-[500px] lg:h-[700px]  w-[500px] object-cover mb-3"
          src="https://images.unsplash.com/photo-1598960383478-bcc6dddb4781?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="sm:px-10 h-full">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p>jawa timur, indonesia</p>
          <div className="flex flex-row gap-3">
            <img
              className="rounded-lg h-[70px] w-[70px] sm:h-[120px] sm:w-[120px] object-cover mb-3"
              src="https://images.unsplash.com/photo-1598960383478-bcc6dddb4781?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="rounded-lg h-[70px] w-[70px] sm:h-[120px] sm:w-[120px] object-cover mb-3"
              src="https://images.unsplash.com/photo-1598960383478-bcc6dddb4781?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="rounded-lg h-[70px] w-[70px] sm:h-[120px] sm:w-[120px] object-cover mb-3"
              src="https://images.unsplash.com/photo-1598960383478-bcc6dddb4781?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="border-t-2 border-b-2 py-5">
            <h2 className="text-xl font-semibold">overview</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem ex veniam quisquam quam maiores est. Porro eius
              exercitationem iure voluptas saepe id mollitia consectetur quae
              fugit aliquid, perspiciatis nulla possimus. Error corrupti at hic
              rerum quo saepe eaque cumque aut. Quam quasi nihil officia ipsum
              id soluta reiciendis quas voluptates.
            </p>
          </div>
          <div className="border-t-2 border-b-2 py-5">
            <h2 className="text-xl font-semibold">location</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem ex veniam quisquam quam.
            </p>
          </div>
          <div className='mb-5'>
            <button className="bg-primary text-white w-full  px-5 py-3 rounded-lg">add to wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
