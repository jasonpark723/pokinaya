import Header from "@/components/component/Header";
import Hero from "@/components/component/Hero";
import Menu from "@/components/component/Menu";
import About from "@/components/component/About";
import Reviews from "@/components/component/Reviews";
import Location from "@/components/component/Location";
import FindUs from "@/components/component/FindUs";
import Footer from "@/components/component/Footer";

export default function Home() {
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="flex-1">
        <Hero className="bg-red-100"></Hero>
        <Menu className="bg-gray-50"></Menu>
        <About className="bg-white"></About>
        <Reviews className="bg-red-100"></Reviews>
        <Location className="bg-white"></Location>
        <FindUs className="bg-red-200"></FindUs>
      </main>
      <Footer></Footer>
    </div>
  );
}
