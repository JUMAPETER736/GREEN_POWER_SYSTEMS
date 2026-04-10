export default function Services() {
  const services = [
    {
      id: "installation",
      title: "Solar Panel Installation",
      icon: "📦",
      description:
        "Professional solar panel installation for residential and commercial properties",
      features: [
        "Site assessment and design",
        "High-quality panel installation",
        "Electrical system integration",
        "Permitting and inspections",
        "Post-installation support",
      ],
      details:
        "Our expert technicians will assess your property, design a custom solar system, and install it with precision. We handle all aspects including electrical integration, permits, and inspections.",
    },
    {
      id: "maintenance",
      title: "System Maintenance",
      icon: "🔍",
      description: "Regular maintenance to ensure optimal system performance",
      features: [
        "Monthly system monitoring",
        "Panel cleaning and care",
        "Component inspection",
        "Performance optimization",
        "Preventive maintenance plans",
      ],
      details:
        "Regular maintenance keeps your solar system running at peak efficiency. We offer monthly monitoring, panel cleaning, inspections, and performance optimization to maximize your energy production.",
    },
    {
      id: "repair",
      title: "Repairs & Troubleshooting",
      icon: "🛠️",
      description: "Expert repair services for all solar system issues",
      features: [
        "Rapid response service",
        "Diagnostic troubleshooting",
        "Component replacement",
        "System optimization",
        "Emergency repair available",
      ],
      details:
        "If your system isn't performing optimally, our technicians will quickly diagnose and fix the problem. We offer emergency repairs and component replacements to minimize downtime.",
    },
    {
      id: "upgrade",
      title: "System Upgrades",
      icon: "⚡",
      description: "Expand and upgrade your existing solar system",
      features: [
        "Capacity expansion",
        "Battery storage addition",
        "Technology upgrades",
        "Performance enhancement",
        "Scalable solutions",
      ],
      details:
        "As your energy needs grow, we can expand your system with additional panels, battery storage, or upgraded technology for better performance and energy independence.",
    },
    {
      id: "consultation",
      title: "Solar Consultation",
      icon: "💡",
      description: "Expert guidance for your solar energy projects",
      features: [
        "Energy needs assessment",
        "System design recommendations",
        "Cost-benefit analysis",
        "Financing options",
        "Implementation planning",
      ],
      details:
        "Not sure if solar is right for you? Our consultants will assess your energy needs, explain your options, analyze the financial benefits, and create a custom implementation plan.",
    },
    {
      id: "commercial",
      title: "Commercial Solutions",
      icon: "🏢",
      description: "Large-scale solar solutions for businesses",
      features: [
        "Business energy analysis",
        "Scalable system design",
        "Minimal downtime installation",
        "Performance monitoring",
        "ROI optimization",
      ],
      details:
        "We design and install large-scale solar systems for businesses, factories, and commercial properties. Our solutions help reduce operational costs and improve sustainability.",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "Free assessment of your energy needs and property",
    },
    {
      step: 2,
      title: "Design",
      description: "Custom solar system design tailored to your requirements",
    },
    {
      step: 3,
      title: "Permitting",
      description: "We handle all permits and regulatory requirements",
    },
    {
      step: 4,
      title: "Installation",
      description: "Professional installation by certified technicians",
    },
    {
      step: 5,
      title: "Inspection",
      description: "Complete system inspection and optimization",
    },
    {
      step: 6,
      title: "Support",
      description: "Ongoing maintenance and customer support",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white section-padding">
        <div className="section-container">
          <h1 className="text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Comprehensive solar energy solutions from design to installation and
            ongoing maintenance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="card-elevated p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {service.details}
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-primary mb-3">
                    What's Included:
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <h2 className="text-center mb-16">Our Installation Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="card p-4 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-sm text-primary mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-center mb-16">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-3">✅ Certified Professionals</h3>
              <p className="text-gray-600">
                Our team consists of certified solar installers with years of
                experience in the industry.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-3">✅ Quality Materials</h3>
              <p className="text-gray-600">
                We use only premium solar panels and components from trusted
                manufacturers.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-3">✅ Competitive Pricing</h3>
              <p className="text-gray-600">
                We offer competitive rates with flexible payment options to fit
                your budget.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-3">✅ 24/7 Support</h3>
              <p className="text-gray-600">
                Our customer support team is available round the clock to assist
                you.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-3">✅ Warranty Protection</h3>
              <p className="text-gray-600">
                All installations come with comprehensive warranty and guaranteed
                performance.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-3">✅ Fast Installation</h3>
              <p className="text-gray-600">
                Most installations are completed within 1-2 weeks with minimal
                disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary text-white section-padding">
        <div className="section-container text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our solar experts today.
          </p>
          <button className="btn-primary">Request Free Consultation</button>
        </div>
      </section>
    </>
  );
}