import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import dday1 from "@/assets/1.png";
import dday2 from "@/assets/2.png";
import dday3 from "@/assets/3.png";
import dday4 from "@/assets/4.png";
import dday5 from "@/assets/5.png";
import dday6 from "@/assets/6.png";
import dday7 from "@/assets/7.jpeg";
import dday8 from "@/assets/8.jpeg";
import dday9 from "@/assets/9.jpeg";
import dday10 from "@/assets/10.png";
import dday11 from "@/assets/11.png";
import dday12 from "@/assets/12.png";
import dday13 from "@/assets/13.png";
import dday14 from "@/assets/14.png";
import dday15 from "@/assets/15.png";
import dday16 from "@/assets/16.png";
import dday17 from "@/assets/17.png";
import dday18 from "@/assets/18.png";
import dday19 from "@/assets/19.png";
import dday20 from "@/assets/20.png";
import dday21 from "@/assets/21.png";
import dday22 from "@/assets/22.png";
import dday23 from "@/assets/23.png";
import dday24 from "@/assets/24.png";
import dday25 from "@/assets/25.png";
import dday26 from "@/assets/26.png";
import dday27 from "@/assets/27.png";
import dday28 from "@/assets/28.png";
import dday29 from "@/assets/29.png";
import dday30 from "@/assets/30.png";
import dday31 from "@/assets/31.png";
import dday32 from "@/assets/32.png";
import dday33 from "@/assets/33.png";
import dday34 from "@/assets/34.png";
import dday35 from "@/assets/35.png";
import dday36 from "@/assets/36.png";
import dday37 from "@/assets/37.png";
import dday38 from "@/assets/38.png";
import dday39 from "@/assets/39.png";
import dday40 from "@/assets/40.png";
import Luxury1 from "@/assets/Luxury1.png";
import Luxury2 from "@/assets/Luxury2.png";
import Luxury3 from "@/assets/Luxury3.png";
import Luxury4 from "@/assets/Luxury4.jpeg";
import Luxury5 from "@/assets/Luxury5.jpeg";
import Luxury6 from "@/assets/Luxury6.jpeg";
import Luxury7 from "@/assets/Luxury7.jpeg";
import Luxury8 from "@/assets/Luxury8.jpeg";
import Luxury9 from "@/assets/Luxury9.jpeg";
import Luxury10 from "@/assets/Luxury10.jpeg";
import Luxury11 from "@/assets/Luxury11.png";
import Luxury12 from "@/assets/Luxury12.png";
import Luxury13 from "@/assets/Luxury13.png";
import Luxury14 from "@/assets/Luxury14.png";
import Luxury15 from "@/assets/Luxury15.png";
import Luxury16 from "@/assets/Luxury16.png";
import Luxury17 from "@/assets/Luxury17.png";
import Luxury18 from "@/assets/Luxury18.png";
import Luxury19 from "@/assets/Luxury19.png";
import Luxury20 from "@/assets/Luxury20.png";
import Luxury21 from "@/assets/Luxury21.png";
import Luxury22 from "@/assets/Luxury22.png";
import Luxury23 from "@/assets/Luxury23.png";
import Luxury24 from "@/assets/Luxury24.png";
import Luxury25 from "@/assets/Luxury25.png";
import Luxury26 from "@/assets/Luxury26.png";
import Luxury27 from "@/assets/Luxury27.png";
import Luxury28 from "@/assets/Luxury28.png";
import Luxury29 from "@/assets/Luxury29.png";
import Luxury30 from "@/assets/Luxury30.png";
import Luxury31 from "@/assets/Luxury31.jpeg";

type Category = "all" | "luxury" | "ddjay";

interface GalleryItem {
  id: number;
  category: "luxury" | "ddjay";
  image: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "luxury",
    image: Luxury1,
    title: "Modern Glass Facade Building",
  },
  {
    id: 2,
    category: "luxury",
    image: Luxury2,
    title: "Luxury Penthouse Interior",
  },
  {
    id: 3,
    category: "luxury",
    image: Luxury3,
    title: "Villa with Infinity Pool",
  },
  {
    id: 4,
    category: "luxury",
    image: Luxury4,
    title: "Contemporary Mansion Exterior",
  },
  {
    id: 5,
    category: "luxury",
    image: Luxury5,
    title: "Minimalist Living Space",
  },
  {
    id: 6,
    category: "luxury",
    image: Luxury6,
    title: "High-End Apartment Balcony View",
  },
  {
    id: 7,
    category: "luxury",
    image: Luxury7,
    title: "Modern Hotel Lobby Design",
  },
  {
    id: 8,
    category: "luxury",
    image: Luxury8,
    title: "Luxury Bathroom with Jacuzzi",
  },
  {
    id: 9,
    category: "luxury",
    image: Luxury9,
    title: "Modern Glass Villa Exterior",
  },
  {
    id: 10,
    category: "luxury",
    image: Luxury10,
    title: "Skyline View Apartment",
  },
  { id: 11, category: "luxury", image: Luxury11, title: "Oceanfront Mansion" },
  {
    id: 12,
    category: "luxury",
    image: Luxury12,
    title: "Luxury Bedroom Interior",
  },
  {
    id: 13,
    category: "luxury",
    image: Luxury13,
    title: "Elegant Lounge Space",
  },
  {
    id: 14,
    category: "luxury",
    image: Luxury14,
    title: "Luxury Kitchen Design",
  },
  {
    id: 15,
    category: "luxury",
    image: Luxury15,
    title: "Beachside Villa Exterior",
  },
  { id: 16, category: "luxury", image: Luxury16, title: "Luxury Living Room" },
  {
    id: 17,
    category: "luxury",
    image: Luxury17,
    title: "Penthouse Rooftop View",
  },
  {
    id: 18,
    category: "luxury",
    image: Luxury18,
    title: "Contemporary Office Space",
  },
  {
    id: 19,
    category: "luxury",
    image: Luxury19,
    title: "Luxury Villa Front View",
  },
  {
    id: 20,
    category: "luxury",
    image: Luxury20,
    title: "Modern Poolside Mansion",
  },
  {
    id: 21,
    category: "luxury",
    image: Luxury21,
    title: "Architectural Marvel Building",
  },
  {
    id: 22,
    category: "luxury",
    image: Luxury22,
    title: "Glass House in Hills",
  },
  {
    id: 23,
    category: "luxury",
    image: Luxury23,
    title: "Luxury Apartment Lobby",
  },
  {
    id: 24,
    category: "luxury",
    image: Luxury24,
    title: "Urban Penthouse Design",
  },
  {
    id: 25,
    category: "luxury",
    image: Luxury25,
    title: "Luxury Villa Backyard",
  },
  {
    id: 26,
    category: "luxury",
    image: Luxury26,
    title: "Modern House with Pool",
  },
  {
    id: 27,
    category: "luxury",
    image: Luxury27,
    title: "Luxury Interior Design",
  },
  {
    id: 28,
    category: "luxury",
    image: Luxury28,
    title: "Elegant Mansion Front View",
  },
  {
    id: 29,
    category: "luxury",
    image: Luxury29,
    title: "Glass & Concrete Architecture",
  },
  { id: 30, category: "luxury", image: Luxury30, title: "Luxury Resort Villa" },
  {
    id: 31,
    category: "luxury",
    image: Luxury31,
    title: "Modern Architectural Beauty",
  },
  { id: 32, category: "ddjay", image: dday1, title: "DDJAY Housing Complex" },
  {
    id: 33,
    category: "ddjay",
    image: dday2,
    title: "Affordable Residential Building",
  },
  {
    id: 34,
    category: "ddjay",
    image: dday3,
    title: "Community Housing Development",
  },
  { id: 35, category: "ddjay", image: dday4, title: "Modern Affordable Homes" },
  {
    id: 36,
    category: "ddjay",
    image: dday5,
    title: "Residential Society Entrance",
  },
  { id: 37, category: "ddjay", image: dday6, title: "Low-Rise Housing Block" },
  { id: 38, category: "ddjay", image: dday7, title: "Urban Affordable Flats" },
  { id: 39, category: "ddjay", image: dday8, title: "Modern Community Layout" },
  {
    id: 40,
    category: "ddjay",
    image: dday9,
    title: "Township Development Project",
  },
  {
    id: 41,
    category: "ddjay",
    image: dday10,
    title: "Affordable Urban Living",
  },
  {
    id: 42,
    category: "ddjay",
    image: dday11,
    title: "Smart Residential Colony",
  },
  {
    id: 43,
    category: "ddjay",
    image: dday12,
    title: "Affordable Housing Cluster",
  },
  { id: 44, category: "ddjay", image: dday13, title: "Urban Township Project" },
  {
    id: 45,
    category: "ddjay",
    image: dday14,
    title: "Community Lifestyle Flats",
  },
  { id: 46, category: "ddjay", image: dday15, title: "Modern Housing Block" },
  {
    id: 47,
    category: "ddjay",
    image: dday16,
    title: "Residential Development Zone",
  },
  {
    id: 48,
    category: "ddjay",
    image: dday17,
    title: "Sustainable Housing Project",
  },
  {
    id: 49,
    category: "ddjay",
    image: dday18,
    title: "Affordable Living Community",
  },
  { id: 50, category: "ddjay", image: dday19, title: "Green Residential Area" },
  { id: 51, category: "ddjay", image: dday20, title: "Urban Housing Scheme" },
  { id: 52, category: "ddjay", image: dday21, title: "Smart Township Design" },
  {
    id: 53,
    category: "ddjay",
    image: dday22,
    title: "Affordable Luxury Homes",
  },
  {
    id: 54,
    category: "ddjay",
    image: dday23,
    title: "Modern Apartment Complex",
  },
  {
    id: 55,
    category: "ddjay",
    image: dday24,
    title: "Affordable Family Housing",
  },
  {
    id: 56,
    category: "ddjay",
    image: dday25,
    title: "Eco-Friendly Housing Project",
  },
  {
    id: 57,
    category: "ddjay",
    image: dday26,
    title: "Residential Infrastructure Plan",
  },
  {
    id: 58,
    category: "ddjay",
    image: dday27,
    title: "Affordable Flats with Amenities",
  },
  { id: 59, category: "ddjay", image: dday28, title: "Township Entry View" },
  {
    id: 60,
    category: "ddjay",
    image: dday29,
    title: "Modern Living Apartments",
  },
  {
    id: 61,
    category: "ddjay",
    image: dday30,
    title: "Residential Zone Development",
  },
  {
    id: 62,
    category: "ddjay",
    image: dday31,
    title: "Affordable Community Project",
  },
  {
    id: 63,
    category: "ddjay",
    image: dday32,
    title: "New Age Residential Building",
  },
  { id: 64, category: "ddjay", image: dday33, title: "Smart Living Township" },
  {
    id: 65,
    category: "ddjay",
    image: dday34,
    title: "Affordable Villas Project",
  },
  {
    id: 66,
    category: "ddjay",
    image: dday35,
    title: "Residential Complex Entry",
  },
  {
    id: 67,
    category: "ddjay",
    image: dday36,
    title: "Community Development Zone",
  },
  {
    id: 68,
    category: "ddjay",
    image: dday37,
    title: "Affordable Urban Colony",
  },
  {
    id: 69,
    category: "ddjay",
    image: dday38,
    title: "Township Front Elevation",
  },
  {
    id: 70,
    category: "ddjay",
    image: dday39,
    title: "Residential Cluster Design",
  },
  {
    id: 71,
    category: "ddjay",
    image: dday40,
    title: "DDJAY Smart Housing Zone",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems.slice(0,9)
      : galleryItems.filter((item) => item.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
    document.body.classList.remove("modal-open");
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImageIndex === null) return;

    const newIndex =
      direction === "next"
        ? (selectedImageIndex + 1) % filteredItems.length
        : (selectedImageIndex - 1 + filteredItems.length) %
          filteredItems.length;

    setSelectedImageIndex(newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") navigateImage("prev");
    if (e.key === "ArrowRight") navigateImage("next");
  };

  return (
    <section
      id="gallery"
      className="py-20 px-6 md:px-12 lg:px-24 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning real estate designs
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeCategory === "all" ? "hero" : "luxury"}
            onClick={() => setActiveCategory("all")}
            size="lg"
          >
            All Projects
          </Button>
          <Button
            variant={activeCategory === "luxury" ? "hero" : "luxury"}
            onClick={() => setActiveCategory("luxury")}
            size="lg"
          >
            Luxury Designs 🏢
          </Button>
          <Button
            variant={activeCategory === "ddjay" ? "hero" : "luxury"}
            onClick={() => setActiveCategory("ddjay")}
            size="lg"
            data-filter="ddjay"
          >
            Deen Dayal Awas Yojna 🏘️
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-soft cursor-pointer transition-smooth hover:shadow-luxury animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition-smooth group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {isModalOpen && selectedImageIndex !== null && (
          <div
            id="lightboxModal"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            {/* Close Button */}
            <button
              id="lightboxClose"
              aria-label="Close"
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-smooth z-10"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Previous Button */}
            {filteredItems.length > 1 && (
              <button
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-smooth z-10"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>
            )}

            {/* Image */}
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-w-full max-h-[90vh] object-contain animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            {filteredItems.length > 1 && (
              <button
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-smooth z-10"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>
            )}

            {/* Image Title */}
            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-6 py-3 rounded-lg">
              <p className="text-white text-center font-medium">
                {filteredItems[selectedImageIndex].title}
              </p>
            </div> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
