import React, { useState } from 'react';
import { periods } from '../data/artifacts';
import { Period } from '../types';
import { ArtifactModal } from './ArtifactModal';
import { Artifact } from '../types';

interface TimelineProps {
  onPeriodSelect: (period: Period) => void;
  selectedPeriod: Period | null;
}

export function Timeline({ onPeriodSelect, selectedPeriod }: TimelineProps) {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);

  return (
    <>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 to-pink-400 h-full"></div>
        
        {/* Period nodes */}
        <div className="space-y-16 py-8">
          {periods.map((period, index) => (
            <div
              key={period.id}
              className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Period info */}
              <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div
                  className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    selectedPeriod?.id === period.id 
                      ? 'ring-4 ring-blue-400 ring-opacity-50' 
                      : ''
                  }`}
                  onClick={() => onPeriodSelect(period)}
                >
                  <div className="flex items-center mb-3">
                    <div
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: period.color }}
                    ></div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {period.name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    {period.dateRange}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {period.description}
                  </p>
                  
                  {/* Artifacts preview */}
                  {selectedPeriod?.id === period.id && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {period.artifacts.map((artifact) => (
                        <div
                          key={artifact.id}
                          className="bg-gray-50 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:shadow-md"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedArtifact(artifact);
                          }}
                        >
                          <img
                            src={artifact.imageUrl}
                            alt={artifact.name}
                            className="w-full h-32 object-cover rounded-md mb-3"
                          />
                          <h4 className="font-semibold text-gray-800 mb-1">
                            {artifact.name}
                          </h4>
                          {(artifact.artist || artifact.creator) && (
                            <p className="text-xs text-blue-600 mb-1">
                              by {artifact.artist || artifact.creator}
                            </p>
                          )}
                          <p className="text-xs text-gray-600 mb-2">
                            {artifact.dateRange}
                          </p>
                          <p className="text-sm text-gray-700 line-clamp-2">
                            {artifact.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Timeline node */}
              <div className="relative z-10">
                <div
                  className="w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 hover:scale-125"
                  style={{ backgroundColor: period.color }}
                ></div>
              </div>
              
              {/* Empty space for alternating layout */}
              <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
            </div>
          ))}
        </div>
      </div>

      {selectedArtifact && (
        <ArtifactModal
          artifact={selectedArtifact}
          onClose={() => setSelectedArtifact(null)}
        />
      )}
    </>
  );
}