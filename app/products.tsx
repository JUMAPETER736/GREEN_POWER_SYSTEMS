export default function Products() {
  const products = [
    {
      id: 1,
      name: "Standard Solar Panel Package",
      price: "From MWK 450,000",
      power: "3.5 kW",
      description: "Perfect for small to medium residential homes",
      specs: [
        "12 x 400W Solar Panels",
        "5kW Hybrid Inverter",
        "2 x 5kWh Battery Storage",
        "Monitoring System",
        "Installation Included",
      ],
      features: [
        "Ideal for 3-4 bedroom homes",
        "Day and night power supply",
        "Monitoring via mobile app",
        "10-year warranty",
      ],
    },
    {
      id: 2,
      name: "Premium Solar System",
      price: "From MWK 750,000",
      power: "5.5 kW",
      description: "Comprehensive solution for larger homes and small businesses",
      specs: [
        "18 x 400W Solar Panels",
        "8kW Hybrid Inverter",
        "3 x 5kWh Battery Storage",
        "Advanced Monitoring",
        "Professional Installation",
      ],
      features: [
        "Ideal for 5+ bedroom homes or businesses",
        "Extended autonomy with larger battery",
        "Load management optimization",
        "15-year warranty",
      ],
    },
    {
      id: 3,
      name: "Commercial Solar Solution",
      price: "Custom Quote",
      power: "10+ kW",
      description: "Scalable solution for commercial properties and industrial use",
      specs: [
        "30+ x 400W Solar Panels",
        "15-20kW Hybrid Inverter",
        "Multiple Battery Storage Units",
        "Enterprise Monitoring System",
        "Full Installation & Integration",
      ],
      features: [
        "Designed for factories and large buildings",
        "Maximum load capacity",
        "Real-time energy analytics",
        "20-year warranty",
      ],
    },
    {
      id: 4,
      name: "Grid-Tie Solar System",
      price: "From MWK 350,000",
      power: "3 kW",
      description: "Eco-friendly system connected to grid with net metering",
      specs: [
        "10 x 400W Solar Panels",
        "5kW Grid-Tie Inverter",
        "Smart Meter",
        "Monitoring System",
        "Professional Installation",
      ],
      features: [
        "Reduce electricity bills significantly",
        "Sell excess power back to grid",
        "No battery required",
        "Lower upfront cost",
      ],
    },
  ];

  const accessories = [
    {
      name: "Solar Panel Cleaning Kit",
      price: "MWK 15,000",
      description: "Professional cleaning tools for maintaining panel efficiency",
    },
    {
      name: "Battery Storage Expansion",
      price: "From MWK 120,000",
      description: "Add extra storage capacity to existing systems",
    },
    {
      name: "Smart Monitoring System",
      price: "MWK 45,000",
      description: "Advanced mobile app for real-time system monitoring",
    },
    {
      name: "Surge Protection Device",
      price: "MWK 35,000",
      description: "Protects your system from power surges and fluctuations",
    },
    {
      name: "Backup Power Inverter",
      price: "MWK 85,000",
      description: "Portable inverter for temporary power needs",
    },
    {
      name: "Installation Mounting Hardware",
      price: "From MWK 50,000",
      description: "Specialized mounting for different roof types",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white section-padding">
        <div className="section-container">
          <h1 className="text-white mb-4">Our Products</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            High-quality solar systems and accessories for every need and budget.
          </p>
        </div>
      </section>

      {/* Solar Systems */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-center mb-4">Complete Solar Systems</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the perfect solar solution for your home or business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="card-elevated p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {product.id === 2 && (
                  <div className="absolute top-4 right-4 bg-accent text-primary px-4 py-2 rounded-full font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-accent mb-1">
                  {product.price}
                </p>
                <p className="text-sm font-semibold text-gray-600 mb-4">
                  System Size: {product.power}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-6">
                  <p className="font-semibold text-primary mb-3">
                    Package Includes:
                  </p>
                  <ul className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        <span className="text-gray-600 text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="font-semibold text-primary mb-3">Features:</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-primary w-full">
                  Get More Information
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <h2 className="text-center mb-12">Accessories & Add-ons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((accessory, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-primary mb-2">
                  {accessory.name}
                </h3>
                <p className="text-lg font-semibold text-accent mb-3">
                  {accessory.price}
                </p>
                <p className="text-gray-600 mb-4">{accessory.description}</p>
                <button className="text-primary font-semibold hover:text-accent transition-colors duration-300">
                  Add to Cart →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-center mb-12">System Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4">Feature</th>
                  <th className="p-4">Standard</th>
                  <th className="p-4">Premium</th>
                  <th className="p-4">Commercial</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Power Output</td>
                  <td className="p-4">3.5 kW</td>
                  <td className="p-4">5.5 kW</td>
                  <td className="p-4">10+ kW</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Battery Storage</td>
                  <td className="p-4">10 kWh</td>
                  <td className="p-4">15 kWh</td>
                  <td className="p-4">Custom</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Best For</td>
                  <td className="p-4">Home (3-4 BR)</td>
                  <td className="p-4">Home (5+ BR)</td>
                  <td className="p-4">Business</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Warranty</td>
                  <td className="p-4">10 Years</td>
                  <td className="p-4">15 Years</td>
                  <td className="p-4">20 Years</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">Installation</td>
                  <td className="p-4">✓ Included</td>
                  <td className="p-4">✓ Included</td>
                  <td className="p-4">✓ Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Do the systems come with a warranty?",
                a: "Yes, all our systems come with comprehensive 10-20 year warranties depending on the package chosen.",
              },
              {
                q: "Can I expand my system later?",
                a: "Absolutely! All our systems are designed to be scalable, allowing you to add panels and battery storage.",
              },
              {
                q: "What payment options are available?",
                a: "We offer cash payments, installment plans, and financing options to suit your budget.",
              },
              {
                q: "How long does installation take?",
                a: "Most installations are completed within 1-2 weeks depending on system size and complexity.",
              },
            ].map((item, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-bold text-lg text-primary mb-3">
                  {item.q}
                </h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary text-white section-padding">
        <div className="section-container text-center">
          <h2 className="text-white mb-6">Ready to Choose Your Solar System?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us for a personalized quote and system recommendation.
          </p>
          <button className="btn-primary">Contact Sales Team</button>
        </div>
      </section>
    </>
  );
}