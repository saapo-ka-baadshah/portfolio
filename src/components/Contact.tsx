import React, { useState } from 'react';
import STATIC_STRINGS from '../statics/strings.statics';
import ContactInfosData from '../information/ContactInfosData';
import IContactInfo from '../abstractions/interfaces/IContactInfo';
import SocialLinksData from '../information/SocialLinksData';
import ISocialLink from '../abstractions/interfaces/ISocialLink';
import COLOR_PALETTE from '../statics/color.palette';

export default function Contact() {
  const [contacterName, setContacterName] = useState("");
  const [contacterEmail, setContacterEmail] = useState("");
  const [contacterMessage, setContacterMessage] = useState("");

  // TODO: Correct the Email Service with Formspree or some other Service
  const handleContactSubmit = async() => {
    if (contacterName == "") {
      alert("Please Provide a valid Name");
      return;
    }

    if (contacterEmail == "") {
      alert("Please provide a valid Email");
      return;      
    }

    if (contacterMessage == "") {
      alert("Please Provide a valid Message");
      return;
    }
    
    try {
      const response = await fetch(
        'https://formspree.io/f/mqabqnro',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({contacterName, contacterEmail, contacterMessage})
      });

      if (response.ok) {
        setTimeout(() => {
          setContacterName("");
          setContacterEmail("");
          setContacterMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <section 
        id="contact" 
        className="py-20 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${COLOR_PALETTE.Primary} 0%, ${COLOR_PALETTE.Secondary} 50%, ${COLOR_PALETTE.Tertiery} 100%)`
        }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div 
          className="text-center mb-16" 
          // style={{ ...parallaxStyle(0.1) }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              {STATIC_STRINGS.LetsWorkTogether}
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {STATIC_STRINGS.FuturePrompt}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
            // style={{ ...parallaxStyle(0.05) }}
            >
              <div className="space-y-6">
                {ContactInfosData.map((contact: IContactInfo) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={contact.label} className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{contact.label}</h3>
                        <p className="text-gray-200">{contact.value}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex gap-4 mt-8">
                  {SocialLinksData.map((social: ISocialLink) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={social.label}
                        href={social.href} 
                        className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                        aria-label={social.label}
                      >
                        <IconComponent size={24} className="text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div 
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl" 
            // style={{ ...parallaxStyle(0.03) }}
            >
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                    onChange={(e) => setContacterName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                    onChange={(e) => setContacterEmail(e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    onChange={(e) => setContacterMessage(e.target.value)}
                  />
                </div>
                <button
                  className="w-full bg-white text-gray-900 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  onClick={async() => await handleContactSubmit}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div 
          className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-10"
          //style={{ ...parallaxStyle(0.8), backgroundColor: ${COLOR_PALETTE.Quinery} }}
          style={{ backgroundColor: COLOR_PALETTE.Quinery }}
        />
        <div 
          className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-15"
          // style={{ ...parallaxStyle(0.6), backgroundColor: COLOR_PALETTE.Quaternery }}
          style={{ backgroundColor: COLOR_PALETTE.Quaternery }}
        />
      </section>
  )
}
