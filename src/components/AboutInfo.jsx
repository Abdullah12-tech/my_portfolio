import { Link } from 'react-router-dom';
import ProfileImage from '/src/assets/profile/myprofile.gif';

const AboutHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-200">
      <div className="container mx-auto px-8">
        {/* Hero Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Building <span className="text-teal-500">Real Solutions</span>
          </h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute -z-10 top-8 -left-8 w-64 h-64 bg-amber-400 rounded-full opacity-20"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
              <img
                src={ProfileImage}
                alt="Developer Profile"
                className="w-full object-cover"
                style={{ maxHeight: '500px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://via.placeholder.com/400x450?text=Profile+Image';
                }}
              />
            </div>
          </div>

          {/* Intro Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-teal-500">Me</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a full stack developer and designer who builds clean, functional websites and web apps that actually solve problems. I care about quality, speed, and making the experience feel right for real users.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I’ve worked on everything from business sites to dashboards and custom tools—frontend to backend. I don’t just write code, I think through problems, test ideas, and improve the flow until it feels solid.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Whether it’s React, Node, MongoDB or just a clean Figma layout turned into real code, I’m always pushing for better. I love working with smart people, learning fast, and getting real things into the hands of real users.
            </p>
            <Link
              to="#"
              className="inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-teal-500 hover:bg-amber-600 rounded-md shadow-md transition-colors duration-300"
            >
              <span className="flex items-center">
                View CV
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
