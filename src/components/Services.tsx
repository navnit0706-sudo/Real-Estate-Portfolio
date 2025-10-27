import { Palette, Video, Layout, FileImage, Building2, Sparkles } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Real Estate Graphic Design",
    description: "Eye-catching visuals that showcase properties in their best light",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Cinematic property tours and promotional videos that captivate",
  },
  {
    icon: FileImage,
    title: "Flyer & Poster Design",
    description: "Professional marketing materials that drive engagement",
  },
  {
    icon: Sparkles,
    title: "Standee Design",
    description: "Eye-catching standees for property showcases and exhibitions",
  },
  {
    icon: Layout,
    title: "Banner Design",
    description: "Impactful banners for outdoor and digital advertising",
  },
  {
    icon: Palette,
    title: "Property Branding",
    description: "Complete brand identity for real estate projects",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive real estate design solutions tailored to your vision
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-xl shadow-soft hover:shadow-luxury transition-smooth border border-border hover:border-accent/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex p-4 rounded-lg gradient-gold">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
