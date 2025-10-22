import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  CheckCircle,
} from 'lucide-react';
import { CONTACT } from '../data';
import { useInView } from 'react-intersection-observer';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { toast } = useToast();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/neerajnakka', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/neerajchandran',
      label: 'LinkedIn',
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        (e.target as HTMLFormElement).reset();
        setShowSuccessModal(true);
        toast({
          title: "Message sent!",
          description: "I'll get back to you as soon as possible.",
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20"></div>

      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowSuccessModal(false)}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="card-glass rounded-2xl p-8 max-w-md w-full text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Message Sent!
            </h3>
            <p className="text-muted-foreground mb-6">
              I will contact you as soon as possible.
            </p>
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="w-full"
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="access_key"
                value="76ed8075-75d0-4115-a69e-46d2ac83b2ad"
              />

              <div>
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-2 bg-white/5 border-white/10 text-foreground focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-2 bg-white/5 border-white/10 text-foreground focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  className="mt-2 bg-white/5 border-white/10 text-foreground focus:border-primary resize-none"
                  placeholder="Your message"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-[hsl(var(--gradient-blue))] hover:from-primary/90 hover:to-[hsl(var(--gradient-blue))]/90"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card-glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Location
                  </h3>
                  <p className="mt-2 text-muted-foreground">{CONTACT.address}</p>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start">
                <Phone className="h-8 w-8 text-primary flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                  <p className="mt-2 text-muted-foreground">{CONTACT.phoneNo}</p>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start">
                <Mail className="h-8 w-8 text-primary flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-foreground">Email</h3>
                  <p className="mt-2 text-muted-foreground">{CONTACT.email}</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Connect with me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
