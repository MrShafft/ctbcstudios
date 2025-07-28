
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Team = () => {
  const teamMembers = [
    {
      name: "Marcus Chen",
      role: "Creative Director & Founder",
      bio: "With over 15 years in the industry, Marcus leads our creative vision and ensures every project exceeds expectations.",
      image: "Professional headshot of creative director in modern studio setting",
      specialties: ["Creative Direction", "Video Production", "Brand Strategy"]
    },
    {
      name: "Sarah Williams",
      role: "Lead Audio Engineer",
      bio: "Grammy-nominated engineer with expertise in mixing, mastering, and sound design for various genres.",
      image: "Professional audio engineer at mixing console with studio monitors",
      specialties: ["Audio Mixing", "Mastering", "Sound Design"]
    },
    {
      name: "David Rodriguez",
      role: "Video Production Manager",
      bio: "Award-winning cinematographer and director specializing in music videos and commercial content.",
      image: "Professional cinematographer with camera equipment in studio",
      specialties: ["Cinematography", "Directing", "Post-Production"]
    },
    {
      name: "Emily Thompson",
      role: "Music Producer",
      bio: "Multi-platinum producer known for her innovative approach to modern music production and artist development.",
      image: "Music producer working at digital audio workstation with keyboards",
      specialties: ["Music Production", "Songwriting", "Artist Development"]
    },
    {
      name: "Alex Kim",
      role: "Motion Graphics Designer",
      bio: "Creative visual artist specializing in motion graphics, VFX, and digital art for music and commercial projects.",
      image: "Motion graphics designer working on visual effects at computer workstation",
      specialties: ["Motion Graphics", "VFX", "Digital Art"]
    },
    {
      name: "Jessica Martinez",
      role: "Project Manager",
      bio: "Experienced project coordinator ensuring smooth workflow and timely delivery of all studio productions.",
      image: "Professional project manager in modern office environment",
      specialties: ["Project Management", "Client Relations", "Workflow Optimization"]
    }
  ];

  const handleSocialClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="team" className="py-20 relative overflow-hidden">
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
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our passionate team of creatives, engineers, and producers brings decades 
            of combined experience to every project we undertake.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <img  
                  className="relative w-full h-48 object-cover rounded-xl"
                  alt={`${member.name} - ${member.role} at CTBC Studios`}
                 src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {[Linkedin, Twitter, Instagram, Mail].map((Icon, idx) => (
                    <Button
                      key={idx}
                      onClick={handleSocialClick}
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 p-0 text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 rounded-full transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
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
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for 
              creative excellence. If you think you'd be a great fit, we'd love to hear from you.
            </p>
            <Button 
              onClick={handleSocialClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
            >
              View Open Positions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
