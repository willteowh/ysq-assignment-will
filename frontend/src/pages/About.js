import React, { useEffect, useState } from "react";
import ContactInfo from "../components/ContactInfo";
import LegalInfo from "../components/LegalInfo";

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    // default set to Contact
    setActiveSection("Contact");
  }, []);

  return (
    <div className="flex container mx-auto p-4 bg-black min-h-screen text-white">
      <nav className="w-1/4 p-4">
        <ul>
          <li>
            <button
              className={`w-full text-left py-2 ${
                activeSection === "Contact" ? "text-white" : "text-zinc-400"
              }`}
              onClick={() => toggleSection("Contact")}
            >
              Contact
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 ${
                activeSection === "Legal" ? "text-white" : "text-zinc-400"
              }`}
              onClick={() => toggleSection("Legal")}
            >
              Legal
            </button>
          </li>
        </ul>
      </nav>
      <div className="w-3/4 p-4 rounded-lg">
        {activeSection === "Contact" && <ContactInfo />}
        {activeSection === "Legal" && <LegalInfo />}
      </div>
    </div>
  );
};

export default About;
