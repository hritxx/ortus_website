import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronRight, Play, Star, Clock, Users } from "lucide-react";

const CourseCard = React.memo(function CourseCard({ course, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  const IconComponent = course.icon;

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      className={`group relative transform transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${course.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      />
      <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-pulse" />
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${course.color} z-10`}
        >
          {course.level}
        </div>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 rounded-full p-3 transform group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-gray-800 ml-0.5" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-xl bg-gradient-to-r ${course.color}`}
              >
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {course.title}
                </h3>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">
                {course.price}
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
            {course.description}
          </p>
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {course.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-200 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              className={`flex-1 py-3 px-4 bg-gradient-to-r ${course.color} text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Enroll Now</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
            <button className="px-4 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
              Preview
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div
            className={`absolute transform rotate-45 translate-x-4 -translate-y-4 w-8 h-8 bg-gradient-to-r ${course.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
          />
        </div>
      </div>
    </div>
  );
});

export default CourseCard;
