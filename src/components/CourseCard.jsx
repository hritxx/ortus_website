import React, { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronRight, Play, Star, Clock, Users } from "lucide-react";

const CourseCard = React.memo(function CourseCard({ course, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = course.icon;

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${course.color} z-10`}
      >
        {course.level}
      </div>
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          width={400}
          height={192}
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          priority={index === 0}
        />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-full p-3">
              <Play className="w-6 h-6 text-gray-800" />
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-xl bg-gradient-to-r ${course.color}`}>
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                {course.title}
              </h3>
              <div className="flex items-center space-x-3 text-xs text-gray-300">
                <span className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{course.rating}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-white">{course.price}</div>
          </div>
        </div>
        <p className="text-gray-300 mb-3 text-sm">{course.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {course.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-200 border border-white/20"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <button
            className={`flex-1 py-2 px-3 bg-gradient-to-r ${course.color} text-white font-bold rounded-lg hover:opacity-90 transition`}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Enroll Now</span>
              <ChevronRight className="w-4 h-4" />
            </span>
          </button>
          <button className="px-3 py-2 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
});

export default CourseCard;
