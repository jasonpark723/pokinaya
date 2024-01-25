import Link from "next/link";
import Image from "next/image";

const Location = ({className}) => {
  return (
    
    <section
    className={`w-full py-12 md:py-24 lg:py-32 flex flex-row min-h-screen justify-center items-center ${className}`}
    id="locations"
  >
    <div className="container px-4 md:px-6 text-center">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2 mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Location
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Family-owned poke restaurant in the heart of Garden Grove,
              California, offering fresh and flavorful bowls crafted from
              locally sourced ingredients.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="p-4">
              <p className="text-lg font-bold mb-2">Hours of Operation</p>
              <div className="">
                <p>
                  <span className="font-bold">Mon:</span> 11:00 AM - 7:00
                  PM
                </p>
                <p>
                  <span className="font-bold">Tue:</span> 11:00 AM - 7:00
                  PM
                </p>
                <p>
                  <span className="font-bold">Wed:</span> 11:00 AM - 7:00
                  PM
                </p>
                <p>
                  <span className="font-bold">Thu:</span> 11:00 AM - 7:00
                  PM
                </p>
                <p>
                  <span className="font-bold">Fri:</span> 11:00 AM - 7:00
                  PM
                </p>
                <p>
                  <span className="font-bold">Sat:</span> 11:00 AM - 5:00
                  PM
                </p>
                <p>
                  <span className="font-bold">Sun:</span> Closed
                </p>
              </div>
            </div>
            <div className="text-center p-4">
              <p className="text-lg font-bold mb-2">Address</p>
              <h6 className="no-underline hover:underline">
                <Link href="https://www.google.com/maps/place/12012+Knott+St,+Garden+Grove,+CA" target="_blank">
                12012 Knott St Ste C <br></br>
                Garden Grove, CA 92841
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="mx-auto" data-id="21">
          <Link href="https://www.google.com/maps/place/12012+Knott+St,+Garden+Grove,+CA" target="_blank">
            <Image
              src="/img/gallery/map.png"
              width="500"
              height="500"
              alt="Fresh poke bowl"
              className="aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              data-id="22"
            />
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Location