import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const paragraphs = [
  {
    text: "Every moment with you feels like a celebration, but today is extra special. Your smile lights up my world and makes every day feel like a gift.",
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
    ]
  },
  {
    text: "Your laughter is the sweetest melody, your presence the most precious gift. Today we celebrate the amazing person you are and all the joy you bring.",
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
    ]
  },
  {
    text: "Like stars in the night sky, you shine with a brilliance that's uniquely yours. Your kindness and warmth make the world a better place.",
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
    ]
  },
  {
    text: "Each year with you is a treasure, filled with countless moments of love and happiness. You make every day an adventure worth living.",
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
    ]
  },
  {
    text: "On this special day, I want you to know how much you mean to me. Your love is the greatest gift I could ever ask for. Happy birthday, my love.",
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-macchiato-base font-inter">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-macchiato-mantle relative">
        <h1 className="text-6xl md:text-8xl font-bold text-macchiato-text text-center px-4">
          Happy Birthday Baby
        </h1>
        
        {/* Floating Pill */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex items-center gap-2 bg-macchiato-surface0 text-macchiato-text px-4 py-2 rounded-full shadow-lg">
            <span className="text-sm font-medium">Scroll down</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {paragraphs.map((section, index) => (
          <div key={index} className="space-y-8">
            <p className="text-macchiato-text text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center">
              {section.text}
            </p>
            
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {section.images.map((image, imageIndex) => (
                  <CarouselItem key={imageIndex}>
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`Birthday moment ${imageIndex + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-macchiato-text" />
              <CarouselNext className="text-macchiato-text" />
            </Carousel>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-macchiato-crust py-8 text-center text-macchiato-subtext1">
        <p>Made with ❤️ for you</p>
      </footer>
    </div>
  );
};

export default Index;