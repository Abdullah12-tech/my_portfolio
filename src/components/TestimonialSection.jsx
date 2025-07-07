const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      quote: "Alex transformed our web presence completely. The results were beyond our expectations!",
      video: "/testimonial1.mp4",
    },
    {
      name: "Abdulwaris Abdullah",
      role: "Colleagues, SQI College of ICT",
      quote: "The attention to detail and creativity A brings is unmatched in the industry.",
      video: "/testimonial2.mp4",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What People Say
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Don't just take my word for it—here's what clients and colleagues say.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              >
                <source src={testimonial.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex flex-col justify-end p-6">
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;