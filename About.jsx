
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Award-Winning Quality",
      description: "Industry-recognized excellence in music and video production"
    },
    {
      icon: Clock,
      title: "24/7 Studio Access",
      description: "Flexible scheduling to accommodate your creative process"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned professionals with decades of combined experience"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description: "State-of-the-art equipment and latest production software"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
      
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
              About CTBC Studios
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded with a passion for audio-visual excellence, CTBC Studios has been at the forefront 
            of music and video production for over a decade. We combine artistic vision with technical 
            expertise to deliver exceptional results that exceed expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <img  
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                alt="CTBC Studios recording booth with professional equipment"
               src="https://images.unsplash.com/photo-1678356384975-331f4f961ea2" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-gray-300 leading-relaxed">
              What started as a small home studio has evolved into a premier production facility. 
              Our journey has been driven by an unwavering commitment to quality and innovation, 
              helping artists and creators bring their visions to life.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, we're proud to offer world-class facilities, cutting-edge technology, and 
              a team of passionate professionals who understand that every project is unique and 
              deserves personalized attention.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400">10+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-pink-400">500+</div>
                <div className="text-gray-400 text-sm">Projects Done</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-purple-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
