const WhatICanDo = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building fast, responsive, and scalable web applications with modern tech stacks.",
      icon: "💻",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful interfaces that users love.",
      icon: "🎨",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      title: "Animation Magic",
      description: "Adding smooth, engaging animations to make your site stand out.",
      icon: "✨",
      color: "bg-teal-500/10 text-teal-500",
    },
    {
      title: "Consulting",
      description: "Helping you plan and optimize your digital strategy.",
      icon: "📈",
      color: "bg-orange-500/10 text-orange-500",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${service.color} dark:bg-opacity-20`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatICanDo;