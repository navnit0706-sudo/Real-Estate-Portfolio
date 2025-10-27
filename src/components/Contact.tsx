import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: undefined,
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success(
            "Message sent successfully! I'll get back to you soon."
          );
          setSending(false);
          setFormData({ name: "", mobileNumber: "", email: "", message: "" });
        },
        (error) => {
          setSending(false);
          toast.error("Please try again!!");
        }
      );
    // Form submission logic would go here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's create something extraordinary
            together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-soft">
            <form onSubmit={handleSubmit} ref={form} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Mobile number
                </label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="number"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Your mobile number"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[150px]"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={sending}
              >
                {sending ? "Sending" : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Connect With Me
              </h3>

              {/* Contact Details */}
              <div className="space-y-4">
                <a
                  href="mailto:navnit0706@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-smooth"
                >
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <span>navnit0706@gmail.com</span>
                </a>
                <a
                  href="tel:+918398910346"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-smooth"
                >
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <span>+91 83989 10346</span>
                </a>
              </div>
            </div>

            {/* CTA Card */}
            <div className="gradient-hero p-8 rounded-xl shadow-luxury text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                Ready to Start?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Let's discuss your vision and bring it to life
              </p>
              <a
                href="tel:+918398910346"
                className="bg-[#E7AC3A] p-2 rounded-[5px] font-semibold"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
