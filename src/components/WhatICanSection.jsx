import frontend from "../assets/profile/frontend.jpg"
import backend from "../assets/profile/backend.jpg"
import animation from "../assets/profile/animation.jpeg"
const WhatICanDo = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building fast, responsive, and scalable web applications with modern tech stacks.",
      image: frontend,
      color: "hover:border-blue-500",
    },
    {
      title: "Backend Development",
      description: "Designing robust, secure, and scalable server-side systems and APIs.",
      image: backend, // Backend server image
      color: "hover:border-red-500",
    },
    {
      title: "Animation Magic",
      description: "Adding smooth, engaging animations to make your site stand out.",
      image: animation,
      color: "hover:border-teal-500",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800 dark:text-white">
          What I Can Do For You
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          I specialize in creating digital experiences that are not just functional, but delightful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-slate-800 border border-transparent rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 p-6 ${service.color}`}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatICanDo;
