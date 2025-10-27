import { Award, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a passionate real estate design specialist, I transform properties into visual masterpieces through the power of graphic design and video editing. With years of experience crafting stunning visuals for both luxury developments and affordable housing projects, I bring a unique blend of creativity and attention to detail to every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My mission is simple: to create visuals that don't just showcase properties—they sell dreams and inspire action.
            </p>

            {/* Stats or Values */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground">Excellence</h4>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-3">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground">Passion</h4>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-3">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground">Innovation</h4>
              </div>
            </div>
          </div>

          {/* Right Content - Decorative Element */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury aspect-[4/5]">
              <div className="absolute inset-0 gradient-hero flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    Crafting Visual Excellence
                  </h3>
                  <p className="text-primary-foreground/80">
                    Every project is an opportunity to create something extraordinary
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 gradient-gold rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-gold rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
