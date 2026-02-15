import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, MapPin, Star, Fuel, Users, Settings2 } from "lucide-react";

const cars = [
  { id: 1, name: "Tesla Model 3", type: "Electric", price: 89, rating: 4.9, seats: 5, fuel: "Electric", transmission: "Auto", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600" },
  { id: 2, name: "BMW 3 Series", type: "Sedan", price: 75, rating: 4.7, seats: 5, fuel: "Petrol", transmission: "Auto", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600" },
  { id: 3, name: "Mercedes GLE", type: "SUV", price: 120, rating: 4.8, seats: 7, fuel: "Diesel", transmission: "Auto", image: "https://images.unsplash.com/photo-1606611013016-969c19ba27ae?w=600" },
  { id: 4, name: "Audi A4", type: "Sedan", price: 70, rating: 4.6, seats: 5, fuel: "Petrol", transmission: "Auto", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600" },
  { id: 5, name: "Range Rover Sport", type: "SUV", price: 150, rating: 4.9, seats: 5, fuel: "Diesel", transmission: "Auto", image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600" },
  { id: 6, name: "Porsche 911", type: "Sports", price: 200, rating: 5.0, seats: 2, fuel: "Petrol", transmission: "Auto", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600" },
];

const CarRental = () => {
  const [filter, setFilter] = useState("All");
  const types = ["All", "Electric", "Sedan", "SUV", "Sports"];
  const filtered = filter === "All" ? cars : cars.filter(c => c.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Rent Your <span className="text-gradient">Dream Car</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Premium vehicles at unbeatable prices. Drive in style wherever you go.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {types.map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === t
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "glass text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((car, i) => (
              <Card
                key={car.id}
                className="overflow-hidden hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-xs font-medium">
                    {car.type}
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold">{car.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{car.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {car.seats}</span>
                    <span className="flex items-center gap-1"><Fuel className="h-3.5 w-3.5" /> {car.fuel}</span>
                    <span className="flex items-center gap-1"><Settings2 className="h-3.5 w-3.5" /> {car.transmission}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gradient">${car.price}</span>
                      <span className="text-sm text-muted-foreground">/day</span>
                    </div>
                    <Button variant="hero" size="sm">Rent Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarRental;
