
const ContactSection = () => {
  return (
    <section id="contact" className="py-8 bg-gradient-to-br from-black to-maroon text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100">
            Ready to experience Atlantis? Contact us today
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-blue-100">info@atlantis.com</p>
            <p className="text-blue-100">support@atlantis.com</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-blue-100">+1 (555) 123-4567</p>
            <p className="text-blue-100">+1 (555) 987-6543</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-blue-100">123 Ocean Drive</p>
            <p className="text-blue-100">Atlantis City, AC 12345</p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 border-t mt-8 border-blue-800 dark:border-blue-200">
            <p className="text-blue-800 dark:text-blue-200">
              © 2024 Atlantis. All rights reserved.
            </p>
          </div>
    </section>
  );
};

export default ContactSection;
