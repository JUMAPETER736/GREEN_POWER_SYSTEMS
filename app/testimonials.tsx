export default function Testimonials() {
  const testimonials = [
    {
      name: "John Banda",
      location: "Lilongwe",
      rating: 5,
      text: "Green Power Systems provided excellent service from start to finish. The installation was professional and efficient. I've been saving significantly on my electricity bills. Highly recommended!",
      title: "Homeowner",
      image: "👨‍💼",
    },
    {
      name: "Mary Chikoti",
      location: "Area 3, Lilongwe",
      rating: 5,
      text: "Outstanding customer service and quality workmanship. The team answered all my questions and made the installation process smooth. My home now has reliable power supply at night.",
      title: "Business Owner",
      image: "👩‍💼",
    },
    {
      name: "Peter Mwale",
      location: "Kanengo, Lilongwe",
      rating: 5,
      text: "Best decision I made for my family. The solar system is working perfectly, and the maintenance service is very responsive. Costs have reduced by more than 50%. Thank you!",
      title: "Homeowner",
      image: "👨‍💼",
    },
    {
      name: "Grace Phiri",
      location: "Old Town, Lilongwe",
      rating: 5,
      text: "I was skeptical at first, but the team convinced me with their expertise and honest approach. Now I enjoy clean energy and reduced bills. The 24/7 support is amazing!",
      title: "Homeowner",
      image: "👩‍💼",
    },
    {
      name: "David Nkhoma",
      location: "Lilongwe",
      rating: 5,
      text: "Professional installation, excellent quality, and competitive pricing. They didn't rush the process and ensured everything was perfect. Couldn't ask for more!",
      title: "Property Manager",
      image: "👨‍💼",
    },
    {
      name: "Sarah Tembo",
      location: "Area 4, Lilongwe",
      rating: 5,
      text: "The team was extremely helpful in designing a system that fit my needs and budget. Installation was quick and clean. I'm saving money and helping the environment!",
      title: "Homeowner",
      image: "👩‍💼",
    },
  ];

  const benefits = [
    {
      title: "Reduced Electricity Costs",
      description: "Save up to 80% on your monthly electricity bills",
      icon: "💰",
    },
    {
      title: "24/7 Power Supply",
      description: "Enjoy reliable power supply day and night",
      icon: "⚡",
    },
    {
      title: "Environmental Impact",
      description: "Reduce your carbon footprint and help the planet",
      icon: "🌍",
    },
    {
      title: "Increased Property Value",
      description: "Add significant value to your home or business",
      icon: "📈",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "1000+", label: "Installations" },
    { number: "50MWh", label: "Clean Energy Generated" },
    { number: "5000+", label: "Tons CO₂ Saved" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white section-padding">
        <div className="section-container">
          <h1 className="text-white mb-4">What Our Customers Say</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Real testimonials from satisfied customers across Lilongwe who have
            benefited from our solar solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-center mb-12">Customer Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-elevated p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <h2 className="text-center mb-12">Why Customers Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-center mb-12">Featured Case Study</h2>

          <div className="card-elevated p-8 md:p-12 bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Residential Installation - Area 25
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A 4-bedroom home in Area 25 was consuming approximately
                  8,000 kWh annually, with monthly electricity bills exceeding
                  MWK 150,000.
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="font-semibold text-primary">Challenge:</p>
                    <p className="text-gray-600">
                      High electricity costs and unreliable power supply
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Solution:</p>
                    <p className="text-gray-600">
                      5.5 kW Premium Solar System with 15 kWh battery storage
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Results:</p>
                    <p className="text-gray-600">
                      80% reduction in electricity costs, 24/7 power supply,
                      system paid for itself in 4 years
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card p-4 bg-white">
                  <p className="text-sm text-gray-600 mb-1">Annual Savings</p>
                  <p className="text-3xl font-bold text-accent">
                    MWK 1,440,000
                  </p>
                </div>
                <div className="card p-4 bg-white">
                  <p className="text-sm text-gray-600 mb-1">System Lifespan</p>
                  <p className="text-3xl font-bold text-primary">25+ Years</p>
                </div>
                <div className="card p-4 bg-white">
                  <p className="text-sm text-gray-600 mb-1">CO₂ Offset</p>
                  <p className="text-3xl font-bold text-green-600">
                    1.2 Tons/Year
                  </p>
                </div>
                <div className="card p-4 bg-white">
                  <p className="text-sm text-gray-600 mb-1">Payback Period</p>
                  <p className="text-3xl font-bold text-primary">4 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container text-center">
          <h2 className="mb-4">Customer Satisfaction Rating</h2>
          <div className="inline-block card p-8">
            <div className="flex items-center gap-4 mb-4 justify-center">
              <span className="text-6xl font-bold text-primary">4.9</span>
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">Based on 150+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary text-white section-padding">
        <div className="section-container text-center">
          <h2 className="text-white mb-6">Join Our Satisfied Customers</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Experience the benefits of solar energy and become part of the
            clean energy revolution in Lilongwe.
          </p>
          <button className="btn-primary">Start Your Journey Today</button>
        </div>
      </section>
    </>
  );
}