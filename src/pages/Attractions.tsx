import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, Ticket } from "lucide-react";

const attractions = [
  { id: 1, name: "Eiffel Tower", location: "Paris, France", price: 25, rating: 4.8, duration: "2-3 hrs", category: "Landmark", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=600" },
  { id: 2, name: "Burj Khalifa", location: "Dubai, UAE", price: 40, rating: 4.9, duration: "1-2 hrs", category: "Landmark", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600" },
  { id: 3, name: "Shibuya Crossing", location: "Tokyo, Japan", price: 0, rating: 4.7, duration: "1 hr", category: "Experience", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600" },
  { id: 4, name: "Sagrada Familia", location: "Barcelona, Spain", price: 26, rating: 4.9, duration: "2-3 hrs", category: "Architecture", image: "https://images.unsplash.com/photo-1583779457711-ab081d9e2985?w=600" },
  { id: 5, name: "Tower Bridge", location: "London, UK", price: 12, rating: 4.6, duration: "1-2 hrs", category: "Landmark", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600" },
  { id: 6, name: "Grand Canyon", location: "Arizona, USA", price: 35, rating: 5.0, duration: "Full day", category: "Nature", image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600" },
];

const Attractions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Explore <span className="text-gradient">Attractions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Discover iconic landmarks, hidden gems, and unforgettable experiences worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((a, i) => (
              <Card
                key={a.id}
                className="overflow-hidden hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 glass px-3 py-1 rounded-full text-xs font-medium">
                    {a.category}
                  </div>
                  <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" /> {a.rating}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-1">{a.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
                    <MapPin className="h-3.5 w-3.5" /> {a.location}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {a.duration}</span>
                    <span className="flex items-center gap-1"><Ticket className="h-3.5 w-3.5" /> {a.price === 0 ? "Free" : `$${a.price}`}</span>
                  </div>
                  <Button variant="hero" size="sm" className="w-full">Book Tickets</Button>
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

export default Attractions;
