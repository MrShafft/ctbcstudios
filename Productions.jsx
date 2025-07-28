
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Music, Video, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Productions = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'music', name: 'Music Videos' },
    { id: 'commercial', name: 'Commercials' },
    { id: 'documentary', name: 'Documentaries' },
    { id: 'album', name: 'Album Production' }
  ];

  const productions = [
    {
      id: 1,
      title: "Midnight Dreams",
      artist: "Luna Rodriguez",
      category: "music",
      type: "Music Video",
      description: "A cinematic music video featuring ethereal visuals and dynamic storytelling.",
      image: "Cinematic music video set with dramatic lighting and artistic composition"
    },
    {
      id: 2,
      title: "Tech Innovation 2024",
      artist: "TechCorp",
      category: "commercial",
      type: "Commercial",
      description: "High-energy commercial showcasing cutting-edge technology solutions.",
      image: "Modern tech commercial production with sleek equipment and professional lighting"
    },
    {
      id: 3,
      title: "Urban Stories",
      artist: "Street Collective",
      category: "documentary",
      type: "Documentary",
      description: "Documentary exploring urban culture and community stories.",
      image: "Documentary filming setup in urban environment with professional cameras"
    },
    {
      id: 4,
      title: "Echoes of Tomorrow",
      artist: "Synth Wave",
      category: "album",
      type: "Album Production",
      description: "Full album production featuring electronic and ambient soundscapes.",
      image: "Recording studio during album production with synthesizers and mixing equipment"
    },
    {
      id: 5,
      title: "Summer Vibes",
      artist: "Beach Boys Revival",
      category: "music",
      type: "Music Video",
      description: "Vibrant summer-themed music video with beach and sunset scenes.",
      image: "Beach music video production with sunset lighting and ocean backdrop"
    },
    {
      id: 6,
      title: "Green Future",
      artist: "EcoSolutions",
      category: "commercial",
      type: "Commercial",
      description: "Environmental awareness commercial promoting sustainable solutions.",
      image: "Eco-friendly commercial production with natural lighting and green elements"
    }
  ];

  const filteredProductions = activeCategory === 'all' 
    ? productions 
    : productions.filter(prod => prod.category === activeCategory);

  const handlePlayClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="productions" className="py-20 relative overflow-hidden">
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
              Our Productions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse portfolio of music videos, commercials, documentaries, 
            and album productions that showcase our creative excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Productions Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProductions.map((production, index) => (
            <motion.div
              key={production.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/20"
            >
              <div className="relative overflow-hidden">
                <img  
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={`${production.title} production showcase`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      onClick={handlePlayClick}
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch
                    </Button>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                    {production.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{production.title}</h3>
                <p className="text-purple-400 font-medium mb-3">{production.artist}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{production.description}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    {production.category === 'music' && <Music className="w-4 h-4 text-purple-400" />}
                    {production.category === 'commercial' && <Video className="w-4 h-4 text-purple-400" />}
                    {production.category === 'documentary' && <Video className="w-4 h-4 text-purple-400" />}
                    {production.category === 'album' && <Music className="w-4 h-4 text-purple-400" />}
                    <span className="text-sm text-gray-400 capitalize">{production.category}</span>
                  </div>
                  
                  <Button
                    onClick={handlePlayClick}
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-white p-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            onClick={handlePlayClick}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full"
          >
            View Full Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Productions;
