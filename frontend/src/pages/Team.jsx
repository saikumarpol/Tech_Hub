import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt'; // Corrected import
import AnimatedPage from '../components/AnimatedPage';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Sample team data
  const team = {
    head: {
      name: 'Sai Kumar Pola',
      role: 'Team Lead',
      bio: 'Sai is the driving force behind BTech Hub, with over 5 years of experience in full-stack development. Passionate about empowering JNTU students, he leads the team with vision and expertise.',
      image: 'https://via.placeholder.com/400x400?text=Sai+Kumar',
      social: {
        github: 'https://github.com/saikumarpola',
        linkedin: 'https://linkedin.com/in/saikumarpola',
      },
    },
    juniors: [
      {
        name: 'Ravi Sharma',
        role: 'Junior Developer',
        bio: 'Ravi crafts intuitive and responsive user interfaces, enhancing the BTech Hub experience with his frontend expertise.',
        image: 'https://via.placeholder.com/200x200?text=Ravi',
        social: {
          github: 'https://github.com/ravisharma',
          linkedin: 'https://linkedin.com/in/ravisharma',
        },
      },
      {
        name: 'Anitha Reddy',
        role: 'Junior Developer',
        bio: 'Anitha builds robust backend APIs, ensuring seamless data integration for BTech Hub’s learning platform.',
        image: 'https://via.placeholder.com/200x200?text=Anitha',
        social: {
          github: 'https://github.com/anithareddy',
          linkedin: 'https://linkedin.com/in/anithareddy',
        },
      },
      {
        name: 'Kiran Patel',
        role: 'Junior Developer',
        bio: 'Kiran is a versatile full-stack developer, contributing to both UI design and database optimization.',
        image: 'https://via.placeholder.com/200x200?text=Kiran',
        social: {
          github: 'https://github.com/kiranpatel',
          linkedin: 'https://linkedin.com/in/kiranpatel',
        },
      },
      {
        name: 'Priya Menon',
        role: 'Junior Developer',
        bio: 'Priya ensures quality through rigorous testing and debugging, delivering a polished user experience.',
        image: 'https://via.placeholder.com/200x200?text=Priya',
        social: {
          github: 'https://github.com/priyamenon',
          linkedin: 'https://linkedin.com/in/priyamenon',
        },
      },
    ],
  };

  // Modal for detailed bio
  const BioModal = ({ member, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="glassmorphism p-8 rounded-2xl max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-secondary"
        />
        <h3 className="text-2xl font-semibold text-primary text-center">{member.name}</h3>
        <p className="text-lg text-secondary text-center mb-2">{member.role}</p>
        <p className="text-gray-200 text-center mb-4">{member.bio}</p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href={member.social.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-200 hover:text-primary text-xl"
            aria-label={`GitHub profile of ${member.name}`}
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-200 hover:text-primary text-xl"
            aria-label={`LinkedIn profile of ${member.name}`}
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="mt-6 bg-primary text-white px-4 py-2 rounded-lg mx-auto block"
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );

  return (
    <AnimatedPage>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Our Exceptional Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the brilliant minds crafting BTech Hub, dedicated to empowering JNTU students for success.
            </p>
          </div>

          {/* Team Lead Section */}
          <div className="mb-20">
            <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}>
              <div className="glassmorphism p-10 rounded-3xl max-w-3xl mx-auto shadow-2xl">
                <div className="flex flex-col items-center">
                  <motion.img
                    src={team.head.image}
                    alt={team.head.name}
                    className="w-64 h-64 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{team.head.name}</h3>
                  <p className="text-xl text-secondary font-semibold mb-4">{team.head.role}</p>
                  <p className="text-gray-600 text-center max-w-md mb-6">{team.head.bio}</p>
                  <div className="flex space-x-6">
                    <motion.a
                      href={team.head.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.3 }}
                      className="text-gray-600 hover:text-primary text-2xl"
                      aria-label={`GitHub profile of ${team.head.name}`}
                    >
                      <i className="fab fa-github"></i>
                    </motion.a>
                    <motion.a
                      href={team.head.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.3 }}
                      className="text-gray-600 hover:text-primary text-2xl"
                      aria-label={`LinkedIn profile of ${team.head.name}`}
                    >
                      <i className="fab fa-linkedin"></i>
                    </motion.a>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedMember(team.head)}
                    className="mt-6 bg-secondary text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                  >
                    View Full Bio
                  </motion.button>
                </div>
              </div>
            </Tilt>
          </div>

          {/* Junior Devs Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Talented Junior Developers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.juniors.map((member, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="glassmorphism p-6 rounded-2xl shadow-xl"
                >
                  <div className="flex flex-col items-center">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 rounded-full object-cover mb-4 border-2 border-secondary"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-base text-secondary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-center text-sm mb-4 line-clamp-3">{member.bio}</p>
                    <div className="flex space-x-4">
                      <motion.a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.3 }}
                        className="text-gray-600 hover:text-primary text-lg"
                        aria-label={`GitHub profile of ${member.name}`}
                      >
                        <i className="fab fa-github"></i>
                      </motion.a>
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.3 }}
                        className="text-gray-600 hover:text-primary text-lg"
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <i className="fab fa-linkedin"></i>
                      </motion.a>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedMember(member)}
                      className="mt-4 bg-primary text-white px-4 py-2 rounded-full font-semibold"
                    >
                      View Bio
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      {selectedMember && <BioModal member={selectedMember} onClose={() => setSelectedMember(null)} />}
    </AnimatedPage>
  );
};

export default Team;