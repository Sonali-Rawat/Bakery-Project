const ContactUs = () => {
    return (
      <div className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 border rounded"></textarea>
          <button className="bg-blue-500 px-4 py-2 text-white rounded">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default ContactUs;
  