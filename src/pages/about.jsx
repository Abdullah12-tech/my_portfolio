const AboutPage = () => {
  const traits = [
    { name: "Creative", level: 90 },
    { name: "Problem Solver", level: 95 },
    { name: "Team Player", level: 85 },
    { name: "Detail-Oriented", level: 88 },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-slate-800 dark:text-white">
          About Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
              Who Am I?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              I'm a passionate full-stack developer with 5+ years of experience creating digital experiences that users love. My journey started when I built my first website at 15, and I've been hooked ever since.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              When I'm not coding, you can find me hiking, playing guitar, or experimenting with new cooking recipes.
            </p>

            {/* Personality Traits */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
                My Personality Traits
              </h3>
              <div className="space-y-4">
                {traits.map((trait, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-700 dark:text-slate-300">{trait.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{trait.level}%</span>
                    </div>
                    <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-teal-500 h-2 rounded-full"
                        style={{ width: `${trait.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
              My Journey
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 h-full w-1 bg-slate-300 dark:bg-slate-700"></div>

              {[
                {
                  year: "2018",
                  title: "First Web Project",
                  description: "Built a personal blog using HTML/CSS",
                },
                {
                  year: "2020",
                  title: "Freelance Developer",
                  description: "Started taking on client projects",
                },
                {
                  year: "2022",
                  title: "Senior Developer",
                  description: "Promoted to lead a team of 5 developers",
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-16 pb-8">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
            Fun Facts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "10+", label: "Countries Visited" },
              { number: "∞", label: "Cups of Coffee" },
            ].map((fact, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-3xl font-bold text-teal-500 mb-2">
                  {fact.number}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;