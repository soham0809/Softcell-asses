import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was incredibly simple, and we received payment within 36 hours. I highly recommend their service to any business looking to optimize their software expenses.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechGrowth Inc.",
    },
    {
      id: 2,
      content:
        "As a growing startup, we needed to recoup costs from over-purchased software licenses. SoftSell's valuation was 40% higher than competitors, and their team provided exceptional support throughout the entire process.",
      name: "Michael Chen",
      role: "Operations Director",
      company: "Nexus Innovations",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses that have
            successfully sold their licenses with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-md"
            >
              <div className="flex items-center mb-2">
                {/* 5 Stars */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                {testimonial.content}
              </p>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
