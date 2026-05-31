"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Mail, Linkedin, Twitter, ChevronRight } from "lucide-react";
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
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dedicated professionals committed to excellence and innovation
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group cursor-pointer"
                  onClick={() => openModal(member)}
                  onKeyDown={(e) => e.key === "Enter" && openModal(member)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${member.name}`}
                >
                  {/* Professional Card */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 overflow-hidden group-hover:-translate-y-1 flex flex-col h-full min-h-[420px]">
                    {/* Profile Image Section */}
                    <div className="relative p-8 pb-4">
                      <div className="flex justify-center">
                        {isClient && (
                          <div className="relative">
                            {/* Consistent image frame */}
                            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gray-100 overflow-hidden">
                              <Image
                                src={member.image}
                                alt={`Profile picture of ${member.name}`}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Status indicator */}
                            <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-8 pb-8 text-center flex flex-col flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-3">
                        {member.position}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 min-h-[72px]">
                        {member.bio}
                      </p>

                      {/* Action Button */}
                      <div className="mt-auto">
                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                          View Profile
                          <ChevronRight className="ml-2 h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Subtle accent line */}
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Modal */}
          {selectedMember && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                role="dialog"
                aria-labelledby="modal-title"
              >
                {/* Modal Header */}
                <div className="relative p-8 pb-6 border-b border-gray-100">
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>

                  <div className="flex items-start space-x-6">
                    {isClient && (
                      <div className="flex-shrink-0">
                        {/* Consistent modal image frame */}
                        <div className="w-24 h-24 rounded-xl border-2 border-gray-200 bg-gray-100 overflow-hidden">
                          <Image
                            src={selectedMember.image}
                            alt={selectedMember.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex-1">
                      <h2
                        id="modal-title"
                        className="text-2xl font-bold text-gray-900 mb-2"
                      >
                        {selectedMember.name}
                      </h2>
                      <p className="text-blue-600 font-semibold text-lg mb-1">
                        {selectedMember.position}
                      </p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Available for collaboration</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      About
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Get in Touch
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                        aria-label={`Email ${selectedMember.name}`}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </a>
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        aria-label={`${selectedMember.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                      <a
                        href={selectedMember.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
                        aria-label={`${selectedMember.name}'s Twitter profile`}
                      >
                        <Twitter className="mr-2 h-4 w-4" />
                        Twitter
                      </a>
                    </div>
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
