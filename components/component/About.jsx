import Image from "next/image";

const About = ({ className }) => {
  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32 flex flex-row min-h-screen justify-center items-center ${className}`}
      id="about"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          About Us
        </h2>
        <p className="mt-8 text-gray-500 md:text-xl dark:text-gray-400 text-center">
          Founded in 2020, PokiNaya is a family-owned restaurant dedicated to
          serving fresh, healthy, and delicious poke bowls. Our mission is to
          provide high-quality food that nourishes and delights our customers.
        </p>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
          <Image
            alt="Poke bowl"
            className="w-full rounded-lg object-cover"
            height="200"
            src="/img/gallery/toppings3.JPEG"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Image
            alt="Poke bowl"
            className="w-full rounded-lg object-cover"
            height="200"
            src="/img/gallery/toppings2.JPEG"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Image
            alt="Poke bowl"
            className="w-full rounded-lg object-cover"
            height="200"
            src="/img/gallery/toppings1.JPEG"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Image
            alt="Poke bowl"
            className="w-full rounded-lg object-cover"
            height="200"
            src="/img/gallery/toppings4.JPEG"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
