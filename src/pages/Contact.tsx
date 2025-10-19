import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Contact</h2>

      {/* Map placeholder */}
      <div className="mb-8 h-80 bg-secondary rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-muted-foreground">Interactive Map</p>
            <p className="text-sm text-muted-foreground">Sacramento, California</p>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Form</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className="bg-secondary border-border h-12 rounded-xl px-4 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="bg-secondary border-border h-12 rounded-xl px-4 focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="bg-secondary border-border rounded-xl px-4 py-3 resize-none focus:border-primary transition-colors"
            />
          </div>

          <Button
            type="submit"
            className="bg-gradient-accent text-primary-foreground hover:shadow-accent px-8 py-6 rounded-xl font-medium transition-all duration-300 flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
