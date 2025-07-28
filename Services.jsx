
import React from 'react';
import { motion } from 'framer-motion';
import { Music, Video, Mic, Camera, Headphones, Edit, Palette, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const services = [
    {
      icon: Music,
      title: "Music Production",
      description: "Full-service music production from composition to final master",
      features: ["Recording", "Mixing", "Mastering", "Composition"],
      price: "Starting at $500",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video production for music videos and commercials",
      features: ["Cinematography", "Directing", "Editing", "Color Grading"],
      price: "Starting at $1,500",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Mic,
      title: "Vocal Recording",
      description: "Professional vocal recording in our acoustically treated booths",
      features: ["Vocal Coaching", "Comping", "Tuning", "Processing"],
      price: "Starting at $200",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography for album covers and promotional content",
      features: ["Portrait", "Product", "Event", "Retouching"],
      price: "Starting at $300",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Headphones,
      title: "Audio Post-Production",
      description: "Complete audio post-production for film, TV, and digital media",
      features: ["Sound Design", "Foley", "Dialogue Editing", "Mixing"],
      price: "Starting at $800",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Edit,
      title: "Video Editing",
      description: "Professional video editing and post-production services",
      features: ["Cutting", "Motion Graphics", "VFX", "Color Correction"],
      price: "Starting at $600",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Comprehensive creative direction for your artistic vision",
      features: ["Concept Development", "Art Direction", "Brand Strategy", "Consultation"],
      price: "Starting at $400",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Equipment Rental",
      description: "Rent professional audio and video equipment for your projects",
      features: ["Cameras", "Audio Gear", "Lighting", "Accessories"],
      price: "Starting at $100/day",
      gradient: "from-slate-500 to-gray-500"
    }
  ];

  const handleGetQuote = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive production services 
            to bring your creative vision to life with professional quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-purple-500/20 pt-4">
                <div className="text-center mb-4">
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {service.price}
                  </span>
                </div>
                
                <Button
                  onClick={handleGetQuote}
                  className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-white border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                >
                  Get Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Custom Packages Available</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Need a combination of services? We offer custom packages tailored to your specific 
              project requirements and budget. Contact us for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGetQuote}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
              >
                Request Custom Quote
              </Button>
              <Button 
                onClick={handleGetQuote}
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
