export default function About() {
  const stats = [
    { number: "50+", label: "Installations Completed" },
    { number: "100%", label: "Customer Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" },
  ];

  const team = [
    {
      name: "Qualified Technicians",
      role: "Installation & Maintenance",
      description: "Certified solar installation professionals with years of experience",
    },
    {
      name: "Expert Consultants",
      role: "Solar Design & Planning",
      description: "Experienced engineers who design customized solar solutions",
    },
    {
      name: "Support Team",
      role: "Customer Service",
      description: "Dedicated support team available for all your questions",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white section-padding">
        <div className="section-container">
          <h1 className="text-white mb-4">About Green Power Systems</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Leading solar energy solutions provider in Lilongwe, committed to
            sustainable energy and customer excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Green Power Systems was founded with a mission to bring clean,
                renewable energy solutions to Lilongwe and surrounding areas. We
                believe in the power of solar energy to transform lives and businesses.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 5 years of experience in the solar industry, we have helped
                numerous residential and commercial customers transition to renewable
                energy. Our team of certified professionals ensures quality installation,
                maintenance, and support for all our clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to providing affordable, reliable solar solutions that
                help our customers save money while contributing to environmental
                sustainability.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="mb-6 leading-relaxed">
                To empower individuals and businesses with affordable, high-quality
                solar energy solutions that promote sustainability and reduce energy costs.
              </p>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="leading-relaxed">
                A future where clean, renewable energy is accessible to every home and
                business in Malawi, contributing to a healthier planet and stronger economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your solar energy success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card-elevated p-8 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-3xl">
                  👨‍💼
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <h2 className="text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Quality</h3>
              <p className="text-gray-600">
                We use premium materials and employ certified technicians to ensure
                the highest quality installations and services.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Reliability</h3>
              <p className="text-gray-600">
                Our customers can count on us for professional service, timely
                support, and solutions that work reliably for years to come.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to promoting renewable energy and environmental
                responsibility in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}