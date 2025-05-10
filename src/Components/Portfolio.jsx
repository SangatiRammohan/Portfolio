import { useState } from 'react';

export default function Portfolio() {
  // Sample dynamic data - you would replace this with your actual data
  const [portfolioData, setPortfolioData] = useState({
    name: "Sanku Saiteja",
    title: "Front end Web Developer",
    subtitle: "Working towards To Become A Full Stack Developer",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ],
    projects: [
      {
        id: 1,
        name: "E-Commerce Website",
        description: "A fully responsive e-commerce website with product listings, cart functionality, and secure checkout.",
        image: "/api/placeholder/400/320",
        techStack: ["HTML", "CSS", "JavaScript", "React", "Context API", "Google Firebase", "React Router Dom"],
        demoLink: "#"
      },
      {
        id: 2,
        name: "Flipkart Clone",
        description: "A clone of the popular e-commerce platform Flipkart with similar functionality.",
        image: "/api/placeholder/400/320",
        techStack: ["React", "Redux", "CSS", "Firebase"],
        demoLink: "#"
      },
      {
        id: 3,
        name: "Swiggy Clone",
        description: "A food delivery application clone with restaurant listings and ordering system.",
        image: "/api/placeholder/400/320",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        demoLink: "#"
      },
      {
        id: 4,
        name: "Netflix Clone",
        description: "A streaming platform clone with movie listings and preview functionality.",
        image: "/api/placeholder/400/320",
        techStack: ["React", "Firebase", "TMDB API", "CSS"],
        demoLink: "#"
      }
    ],
    services: [
      {
        id: 1,
        name: "Website Development",
        description: "Full website development from scratch with modern technologies."
      },
      {
        id: 2,
        name: "Mobile App Development",
        description: "Cross-platform mobile application development."
      },
      {
        id: 3,
        name: "React Applications",
        description: "Custom React applications with state management."
      }
    ],
    contact: {
      email: "saitejasaiteja1130@gmail.com",
      social: [
        { platform: "WhatsApp", link: "#", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/whatsapp.svg" },
        { platform: "Facebook", link: "#", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg" },
        { platform: "Instagram", link: "#", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/instagram.svg" },
        { platform: "LinkedIn", link: "#", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" },
        { platform: "Twitter", link: "#", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/twitter.svg" },
        { platform: "GitHub", link: "#", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" }
      ]
    }
  });

  // Form state management
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="flex space-x-4">
            <a href="#home" className="px-4 py-2 rounded bg-blue-400 text-white">Home</a>
            <a href="#about" className="px-4 py-2 text-gray-700">About</a>
            <a href="#services" className="px-4 py-2 text-gray-700">Services</a>
            <a href="#projects" className="px-4 py-2 text-gray-700">Projects</a>
            <a href="#skills" className="px-4 py-2 text-gray-700">Skills</a>
          </div>
          <a href="#contact" className="px-4 py-2 text-gray-700">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-b from-white to-blue-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-2">Hi</h2>
            <h1 className="text-5xl font-bold mb-2">I'm {portfolioData.name}</h1>
            <h2 className="text-4xl font-bold mb-4">{portfolioData.title}</h2>
            <p className="text-lg mb-8">{portfolioData.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-blue-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-4 justify-start">
            {portfolioData.skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-20 h-20 flex items-center justify-center">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 bg-blue-200">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          
          {/* Featured Project */}
          <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/api/placeholder/400/320" 
                  alt={portfolioData.projects[0].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <h3 className="text-xl font-bold mb-2">Project Name: {portfolioData.projects[0].name}</h3>
                <p className="mb-4">{portfolioData.projects[0].description}</p>
                <div className="mb-4">
                  <h4 className="font-bold">TechStack Used:</h4>
                  <ul className="mt-2">
                    {portfolioData.projects[0].techStack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={portfolioData.projects[0].demoLink} 
                  className="inline-block bg-black text-white px-4 py-2 rounded"
                >
                  Project Live Demo
                </a>
              </div>
            </div>
          </div>
          
          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.projects.slice(1).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Services</h2>
          <div className="flex flex-wrap justify-start gap-4">
            {portfolioData.services.map((service) => (
              <div key={service.id} className="p-4 border rounded">
                <h3 className="font-bold">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gradient-to-b from-white to-blue-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold mb-2">Lets Work Together</h2>
              <p className="mb-4">Drop Your Details</p>
            </div>
            
            <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
              <h2 className="text-center text-xl mb-6">Enter Your Details</h2>
              <div>
                <div className="mb-4">
                  <label className="block mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Email-Id</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    rows="3"
                  ></textarea>
                </div>
                <div className="text-right">
                  <button 
                    onClick={handleSubmit} 
                    className="bg-white px-6 py-2 rounded"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-blue-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact Through Social Media</h3>
              <div className="flex space-x-4">
                {portfolioData.contact.social.map((item, index) => (
                  <a key={index} href={item.link} className="text-gray-700 hover:text-blue-500">
                    <img src={item.icon} alt={item.platform} className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-600">
              All Copy Rights Reserved for more Details mail at {portfolioData.contact.email}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}