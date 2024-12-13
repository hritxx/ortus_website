"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import the Next.js Image component
import { FaTimes, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { teamMembers } from "@/constants";

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <Container>
      <FadeIn>
        <div className="mt-16rounded-sm min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-700 text-center mb-12">
              Our Team Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="relative group p-1"
                  onClick={() => openModal(member)}
                  onKeyDown={(e) => e.key === "Enter" && openModal(member)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${member.name}`}
                >
                  {/* Gradient border */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                    style={{
                      backgroundSize: "200% 200%",
                      animation: "gradient-xy 3s linear infinite",
                    }}
                  ></div>

                  {/* Card content */}
                  <div className="relative px-7 py-6 bg-gray-200 rounded-xl leading-none flex items-center justify-center space-x-6">
                    <div className="w-full max-w-sm rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                      <div className="relative p-6 space-y-6">
                        {/* Profile image */}
                        <div className="flex justify-center">
                          {isClient && (
                            <Image
                              src={member.image}
                              alt={`Profile picture of ${member.name}`}
                              width={128}
                              height={128}
                              className="w-32 h-32 rounded-full ring-4 ring-cyan-400 object-cover bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
                            />
                          )}
                        </div>

                        {/* Member details */}
                        <div className="text-center space-y-3">
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {member.name}
                          </h3>
                          <p className="text-cyan-400 font-semibold">
                            {member.position}
                          </p>
                          <p className="text-gray-400 text-sm">{member.bio}</p>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center space-x-4">
                          <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-white rounded-lg hover:opacity-90 transition duration-300 font-semibold">
                            Contact
                          </button>
                          <button className="px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition duration-300 font-semibold">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
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
                      width={500}
                      height={400}
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
