const FunFact = () => {
  const facts = [
    { number: "15+", label: "Projects Completed" },
    { number: "10+", label: "Satisfied Client" },
    { number: "2+", label: "Countries Visited" },
    { number: "∞", label: "Cups of Coffee" }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-10 text-gray-800 text-center">Fun Facts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 shadow-lg border border-gray-100 cursor-pointer"
            >
              <p className="text-4xl font-bold text-teal-500 mb-3">
                {fact.number}
              </p>
              <p className="text-lg font-semibold text-gray-700">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFact;
