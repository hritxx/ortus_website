"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import the Next.js Image component
import { FaTimes, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import Container from "./Container";
import FadeIn from "./FadeIn";

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Prantik Deb",
      position: "Co-Founder & CEO",
      image: "/images/team/prantik.jpg", // Path to local image
      bio: "",
      email: "jortusfinance.invest@gmail.com",
      linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
      twitter: "https://www.instagram.com/0rtusfinance/",
    },
    {
      id: 2,
      name: "Nabanil Debbarma",
      position: "Co-Founder & CFO",
      image: "/images/team/nabanil.jpg", // Path to local image
      bio: "",
      email: "ortusfinance.invest@gmail.com",
      linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
      twitter: "https://www.instagram.com/0rtusfinance/",
    },
    {
      id: 3,
      name: "Rahul Mog",
      position: "Co-Founder & COO",
      image: "/images/team/rahul.jpg", // Path to local image
      bio: "",
      email: "ortusfinance.invest@gmail.com",
      linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
      twitter: "https://www.instagram.com/0rtusfinance/",
    },
    {
      id: 4,
      name: "Saugat Debbarma",
      position: "Equity Research Analyst(Trader/Investor)",
      image: "/images/team/saugat.jpg", // Path to local image
      bio: "",
      email: "ortusfinance.invest@gmail.com",
      linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
      twitter: "https://www.instagram.com/0rtusfinance/",
    },
    {
      id: 5,
      name: "Sajib Debbarma",
      position: "Technical Analyst(Trader)",
      image: "/images/team/sajib.jpg", // Path to local image
      bio: "",
      email: "ortusfinance.invest@gmail.com",
      linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
      twitter: "https://twitter.com/sarahlee",
    },
    {
      id: 6,
      name: "Ishak Debbarma",
      position: "Jr. Eqity Research Analyst(Trader/Investor)",
      image: "/images/team/ishak.jpg", // Path to local image
      bio: "",
      email: "ortusfinance.invest@gmail.com",
      linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
      twitter: "https://www.instagram.com/0rtusfinance/",
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <Container>
      <FadeIn>
        <div className="mt-16 bg-blue-400 min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                  onClick={() => openModal(member)}
                  onKeyDown={(e) => e.key === "Enter" && openModal(member)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${member.name}`}
                >
                  {isClient && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={500} // Adjust width as needed
                      height={400} // Adjust height as needed
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedMember && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div
                className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                role="dialog"
                aria-labelledby="modal-title"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2
                      id="modal-title"
                      className="text-2xl font-bold text-gray-900"
                    >
                      {selectedMember.name}
                    </h2>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close modal"
                    >
                      <FaTimes size={24} />
                    </button>
                  </div>
                  {isClient && (
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      width={500} // Adjust width as needed
                      height={400} // Adjust height as needed
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}
                  <p className="text-gray-600 mb-4">
                    {selectedMember.position}
                  </p>
                  <p className="text-gray-800 mb-6">{selectedMember.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center text-blue-600 hover:text-blue-800"
                      aria-label={`Email ${selectedMember.name}`}
                    >
                      <FaEnvelope className="mr-2" /> Email
                    </a>
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                      aria-label={`${selectedMember.name}'s LinkedIn profile`}
                    >
                      <FaFacebook className="mr-2" /> Facebook
                    </a>
                    <a
                      href={selectedMember.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-600"
                      aria-label={`${selectedMember.name}'s Twitter profile`}
                    >
                      <FaInstagram className="mr-2" /> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </FadeIn>
    </Container>
  );
};

export default TeamSection;
