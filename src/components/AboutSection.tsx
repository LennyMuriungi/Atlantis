
const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-atlantis-blue-800 mb-4">
              About Atlantis
            </h2>
            <p className="text-xl text-gray-600">
              Pioneering excellence in premium lifestyle products
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-atlantis-blue-700 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Atlantis, we're committed to delivering exceptional quality products that enhance your daily experience. From our carefully selected coffee beans to our innovative vaping solutions and pure honey, every product reflects our dedication to excellence and sustainability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in responsible sourcing, environmental stewardship, and creating products that not only meet but exceed our customers' expectations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-atlantis-blue-50 to-atlantis-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-atlantis-green-700 mb-4">
                Our Values
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Quality & Excellence
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Sustainability & Ethics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Innovation & Safety
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Customer Satisfaction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
