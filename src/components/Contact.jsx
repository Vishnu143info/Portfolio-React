import { useState, useEffect, useRef } from "react";
import { 
  Send, 
  Mail, 
  User, 
  MessageSquare, 
  Phone, 
  MapPin, 
  CheckCircle, 
  SendHorizonal,
  Globe,
  Sparkles,
  Calendar
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const formRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  // Send main email (goes to YOU)
  emailjs.send(
    "service_lk89fwb",           // your service ID
    "template_gma2e6x",             // replace with your main template ID
    templateParams,
    "Re1zSQsJC0kZf2LMj"            // your public key
  )
  .then(() => {
    // Send AUTO REPLY (goes to USER)
    return emailjs.send(
      "service_lk89fwb",         // same service ID
      "template_80vl6up",      // replace with your auto reply template ID
      templateParams,
      "Re1zSQsJC0kZf2LMj"
    );
  })
  .then(() => {
    setSubmitted(true);
    setLoading(false);
    setFormData({ name: "", email: "", message: "" });
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    setLoading(false);
  });
};


  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      value: "vishnuprasathappanasamy@gmail.com",
      link: "mailto:vishnuprasathappanasamy@gmail.com"
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      title: "Phone",
      value: "+91 9344598906",
      link: "tel:+919344598906"
    },
    {
      icon: <MapPin className="text-red-400" size={24} />,
      title: "Location",
      value: "BTM Layout, Bengaluru, Karnataka, India",
      link: "https://www.google.com/maps/place/BTM+Layout,+Bengaluru,+Karnataka"
    },
    {
      icon: <Globe className="text-purple-400" size={24} />,
      title: "Available For",
      value: "Full-time & Freelance",
      link: null
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl">
                <Send className="text-white text-3xl" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 animate-gradient">
                  Let's Connect
                </span>
              </h2>
              <p className="text-gray-300 text-lg mt-2">Ready to bring ideas to life</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            <span className="text-cyan-300 font-medium"> Let's create something amazing together!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className={`space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800/50 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 group"
                          target={info.link.includes('http') ? '_blank' : '_self'}
                          rel={info.link.includes('http') ? 'noopener noreferrer' : ''}
                        >
                          <span className="group-hover:underline">{info.value}</span>
                          {info.link && <Sparkles className="inline ml-2 text-cyan-400" size={14} />}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Response Time Card */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-500/20 p-3 rounded-xl">
                    <Calendar className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Response Time</h4>
                    <p className="text-gray-300">Typically replies within 24 hours</p>
                    <div className="flex items-center gap-2 mt-2">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className={`relative transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur-xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl text-center">
                  <div className="inline-flex p-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl mb-6">
                    <CheckCircle className="text-emerald-400" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent Successfully! 🎉</h3>
                  <p className="text-gray-300 mb-6 max-w-md mx-auto">
                    Thank you for reaching out! I've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Send Another Message
                    </button>
                    
                  </div>
                </div>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={`relative transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name Field */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                        <User size={16} />
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                          placeholder="Vishnu"
                          required
                        />
                        {formData.name && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                        <Mail size={16} />
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                          placeholder="vishnu@example.com"
                          required
                        />
                        {formData.email && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="mb-8 group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                      <MessageSquare size={16} />
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full px-5 py-4 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project, ideas, or opportunities..."
                        required
                      />
                      <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                        {formData.message.length}/2000
                      </div>
                    </div>
                  </div>

                  {/* Hidden Fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/#contact`} />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full md:w-auto md:min-w-[200px] mx-auto md:mx-0"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed">
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <SendHorizonal className="group-hover:translate-x-1 transition-transform duration-300" />
                          <span>Send Message</span>
                          <Sparkles className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
                        </>
                      )}
                    </div>
                  </button>

                  {/* Privacy Note */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400 text-center">
                      Your information is secure and will only be used to respond to your inquiry.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Social Connection Prompt */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            <Sparkles className="text-cyan-400" size={20} />
            <p className="text-gray-300">
              Prefer connecting on social media? 
              <a href="https://linkedin.com/in/vishnu-prasath-a-4bb45a232/" className="text-cyan-300 hover:text-cyan-400 ml-2 font-medium">
                Connect on LinkedIn →
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Add animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-gradient {
          animation: gradient 3s infinite ease;
        }
        
        .animate-float {
          animation: float 4s infinite ease-in-out;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite ease-in-out;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        /* Custom scrollbar for textarea */
        textarea::-webkit-scrollbar {
          width: 6px;
        }
        
        textarea::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        
        textarea::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 3px;
        }
        
        textarea::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.8);
        }
      `}</style>
    </section>
  );
}