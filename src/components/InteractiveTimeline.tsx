import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Play, Pause } from 'lucide-react';
import { periods } from '../data/artifacts';
import { Period, Artifact } from '../types';
import { ArtifactModal } from './ArtifactModal';

interface InteractiveTimelineProps {
  onPeriodSelect: (period: Period) => void;
  selectedPeriod: Period | null;
}

export function InteractiveTimeline({ onPeriodSelect, selectedPeriod }: InteractiveTimelineProps) {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [hoveredPeriod, setHoveredPeriod] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % periods.length);
      }, 4000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay]);

  // Navigate to specific period
  const navigateToPeriod = (index: number) => {
    setCurrentIndex(index);
    onPeriodSelect(periods[index]);
  };

  // Zoom controls
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.6));

  // Navigation controls
  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : periods.length - 1;
    navigateToPeriod(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex < periods.length - 1 ? currentIndex + 1 : 0;
    navigateToPeriod(newIndex);
  };

  const currentPeriod = periods[currentIndex];

  return (
    <>
      {/* Timeline Controls */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={goToPrevious}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`p-2 rounded-full transition-colors ${
                isAutoPlay ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
              } text-white`}
            >
              {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            
            <button
              onClick={goToNext}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              {currentIndex + 1} / {periods.length}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleZoomOut}
                className="p-1 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs text-gray-500">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={handleZoomIn}
                className="p-1 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Period Navigation Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {periods.map((period, index) => (
            <button
              key={period.id}
              onClick={() => navigateToPeriod(index)}
              onMouseEnter={() => setHoveredPeriod(period.id)}
              onMouseLeave={() => setHoveredPeriod(null)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'scale-150 shadow-lg'
                  : 'hover:scale-125'
              }`}
              style={{ backgroundColor: period.color }}
            >
              {hoveredPeriod === period.id && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                  {period.name}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Timeline Display */}
      <div 
        ref={timelineRef}
        className="bg-white rounded-xl shadow-2xl overflow-hidden"
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center top' }}
      >
        {/* Current Period Header */}
        <div 
          className="relative h-32 flex items-center justify-center text-white overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${currentPeriod.color}dd, ${currentPeriod.color}aa)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-2">{currentPeriod.name}</h2>
            <p className="text-lg opacity-90">{currentPeriod.dateRange}</p>
          </div>
          
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white animate-pulse"
                  style={{
                    width: Math.random() * 4 + 2 + 'px',
                    height: Math.random() * 4 + 2 + 'px',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 2 + 's',
                    animationDuration: (Math.random() * 3 + 2) + 's'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Period Description */}
        <div className="p-6 bg-gray-50 border-b">
          <p className="text-gray-700 text-lg leading-relaxed">{currentPeriod.description}</p>
        </div>

        {/* Artifacts Grid */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Key Artifacts & Masterpieces
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPeriod.artifacts.map((artifact, artifactIndex) => (
              <div
                key={artifact.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedArtifact(artifact)}
                style={{
                  animationDelay: `${artifactIndex * 200}ms`
                }}
              >
                {/* Artifact Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={artifact.imageUrl}
                    alt={artifact.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                </div>

                {/* Artifact Info */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {artifact.name}
                  </h4>
                  {(artifact.artist || artifact.creator) && (
                    <p className="text-sm text-blue-600 mb-2 font-medium">
                      by {artifact.artist || artifact.creator}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 mb-3 font-medium">
                    {artifact.dateRange} • {artifact.location}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                    {artifact.description}
                  </p>
                  
                  {/* Materials tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {artifact.materials.slice(0, 3).map((material, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {material}
                      </span>
                    ))}
                    {artifact.materials.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{artifact.materials.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Period color accent */}
                <div 
                  className="absolute top-0 right-0 w-16 h-16 transform rotate-45 translate-x-8 -translate-y-8"
                  style={{ backgroundColor: currentPeriod.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Progress Bar */}
        <div className="bg-gray-100 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Timeline Progress</span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentIndex + 1) / periods.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((currentIndex + 1) / periods.length) * 100}%`,
                backgroundColor: currentPeriod.color
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Artifact Modal */}
      {selectedArtifact && (
        <ArtifactModal
          artifact={selectedArtifact}
          onClose={() => setSelectedArtifact(null)}
        />
      )}
    </>
  );
}