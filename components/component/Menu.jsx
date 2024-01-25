import { CardContent, Card } from "@/components/ui/card";
import fishMenu from "@/public/js/fishMenu";

const Menu = ({className}) => {
  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32 flex flex-row min-h-screen justify-center items-center ${className}`}
      id="menu"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Our Menu
        </h2>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {fishMenu.map((fish, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center space-y-2">
                <img
                  alt="Fish"
                  className="w-32 h-32 rounded-full object-cover mt-6"
                  height="200"
                  src={fish.imgSource}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h4 className="text-lg font-semibold">{fish.name}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {fish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
