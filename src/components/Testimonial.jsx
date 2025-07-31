import React, { useState } from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Abdullah was one of my colleagues at SQI, and I have always check and envy his work. If you’re looking to work with someone — he’s the right person.",
      name: "Aminu Oluwaseun",
      role: "Colleagues"
    },    
    {
      id: 2,
      quote: "Working with Abdullah has been nothing short of impressive. He quickly proved himself with a strong command of frontend technologies like React and Node.js, always pushing to sharpen his skills. Abdullah brings a proactive mindset to every task, tackling problems directly and contributing meaningfully to the team’s progress. Whether working independently or in collaboration, he delivers with consistency, precision, and clarity. His commitment to clean code and continuous learning really stands out. As the founder of Prompt2Play, I confidently recommend him for any frontend or full-stack role—he’s a developer who genuinely adds value.",
      name: "Bamitale Azeem Irebami",
      role: "Founder, Prompt2Play"
    },
    {
      id: 3,
      quote: "I had the opportunity to work with him on a website project, and I was truly impressed by his technical skills and dedication. He’s focused, reliable, and always puts in the effort to deliver quality results. Anyone working with him is definitely in good hands.",
      name: "Miqdad Taiwo",
      role: "Team"
    },
    {
      id: 4,
      quote: "Working with Abdullah has been nothing short of inspiring. His consistent, curious, and always committed to finding solid solutions. Whether it’s building projects, studying together, or just exchanging ideas, his energy and focus make a real impact. Anyone teaming up with him is in good hands.",
      name: "Abdullah AbdulWaris",
      role: "Colleagues"
    }
  ];


  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle navigation
  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="testimonials">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto ">
          {/* Section header - centered for better aesthetics */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What <span className="text-teal-500">People Say</span>
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
              Feedback from clients and colleagues I've had the pleasure to work with.
            </p>
          </div>

          {/* Desktop View - Elegant sliding showcase */}
          <div className="hidden md:block relative overflow-hidden">
            <div className="mb-12 relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 p-12 flex flex-col"
                  >
                    <div className="mb-8 flex">
                      <div className="text-teal-500 mr-4">
                        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor">
                          <path d="M14,24H6c-1.1,0-2-0.9-2-2V10c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v12C16,23.1,15.1,24,14,24z M42,24h-8c-1.1,0-2-0.9-2-2V10
                          c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v12C44,23.1,43.1,24,42,24z M28,6v36" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 text-xl leading-relaxed italic font-light">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center text-gray-900 font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-teal-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-500 text-gray-900 p-3 rounded-full shadow-lg hover:bg-teal-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-500 text-gray-900 p-3 rounded-full shadow-lg hover:bg-teal-400 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${index === activeIndex
                    ? 'w-10 h-3 bg-teal-500'
                    : 'w-3 h-3 bg-gray-300 hover:bg-teal-300'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile View - Clean card design */}
          <div className="md:hidden">
            <div className="bg-gray-900 rounded-xl shadow-xl p-6">
              <div className="flex mb-4">
                <div className="text-teal-500 mr-2 flex-shrink-0">
                  <svg className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M14,24H6c-1.1,0-2-0.9-2-2V10c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v12C16,23.1,15.1,24,14,24z M42,24h-8c-1.1,0-2-0.9-2-2V10
                    c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v12C44,23.1,43.1,24,42,24z M28,6v36" />
                  </svg>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {testimonials[activeIndex].quote}
                </p>
              </div>

              <div className="flex items-center pt-4 border-t border-gray-800">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center text-gray-900 font-bold text-xl shadow">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">{testimonials[activeIndex].name}</h4>
                  <p className="text-teal-400">{testimonials[activeIndex].role}</p>
                </div>
              </div>

              {/* Mobile navigation controls */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={prevTestimonial}
                  className="bg-gray-800 hover:bg-gray-700 text-teal-500 p-2 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-teal-500 w-6 h-2' : 'bg-gray-600 w-2 h-2'
                        }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="bg-gray-800 hover:bg-gray-700 text-teal-500 p-2 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;