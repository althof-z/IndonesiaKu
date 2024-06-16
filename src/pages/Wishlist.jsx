import DestinationCard from "../components/destination/DestinationCard";
import Navigation from "../components/destination/Nav";

export default function Wishlist() {
  return (
    <>
      <Navigation />
      <div className=''>
        <h1 className='text-xl lg:text-2xl text-center font-semibold mt-8'>Wishlist</h1>
      <div className='px-4 mt-12 container'>
        <div className='flex justify-between'>
        <h2 className='text-xl mb-8'>your wishlist</h2>
        <p className='mr-3 cursor-pointer underline'>view more</p>
        </div>
        <div className='flex flex-col sm:flex-row pt-'>
          <DestinationCard/ >
          <DestinationCard/ >
          <DestinationCard/ >
          <DestinationCard/ >
        </div>
      </div>
      </div>
    </>
  )
}
