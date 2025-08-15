import React from 'react';
import { X, MapPin, Calendar, Ruler, Archive, Palette, Star } from 'lucide-react';
import { Artifact } from '../types';

interface ArtifactModalProps {
  artifact: Artifact;
  onClose: () => void;
}

export function ArtifactModal({ artifact, onClose }: ArtifactModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center">
            <Palette className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{artifact.name}</h2>
              {(artifact.artist || artifact.creator) && (
                <p className="text-lg text-blue-600 font-medium mb-1">
                  by {artifact.artist || artifact.creator}
                </p>
              )}
              <p className="text-blue-600 font-medium">{artifact.period}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-80 rounded-full transition-all duration-200 hover:scale-110"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image */}
            <div className="lg:col-span-2 space-y-4">
              <img
                src={artifact.imageUrl}
                alt={artifact.name}
                className="w-full h-96 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
              
              {/* Enhanced Quick Info */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  Quick Facts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-sm text-gray-700 bg-white rounded-lg p-3">
                    <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                    <div>
                      <p className="font-medium">Period</p>
                      <p className="text-gray-600">{artifact.dateRange}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-700 bg-white rounded-lg p-3">
                    <MapPin className="w-5 h-5 mr-3 text-red-500" />
                    <div>
                      <p className="font-medium">Origin</p>
                      <p className="text-gray-600">{artifact.location}</p>
                    </div>
                  </div>
                  {artifact.dimensions && (
                    <div className="flex items-center text-sm text-gray-700 bg-white rounded-lg p-3">
                      <Ruler className="w-5 h-5 mr-3 text-green-500" />
                      <div>
                        <p className="font-medium">Dimensions</p>
                        <p className="text-gray-600">{artifact.dimensions}</p>
                      </div>
                    </div>
                  )}
                  {artifact.currentLocation && (
                    <div className="flex items-center text-sm text-gray-700 bg-white rounded-lg p-3">
                      <Archive className="w-5 h-5 mr-3 text-purple-500" />
                      <div>
                        <p className="font-medium">Current Location</p>
                        <p className="text-gray-600">{artifact.currentLocation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{artifact.description}</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Historical Significance</h3>
                <p className="text-gray-700 leading-relaxed">{artifact.significance}</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Materials & Techniques</h3>
                <div className="flex flex-wrap gap-2">
                  {artifact.materials.map((material, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-100 text-purple-800 text-sm rounded-full font-medium hover:bg-purple-200 transition-colors"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Elements */}
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Did You Know?</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    This artifact represents the artistic achievements of the {artifact.period}
                  </p>
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Created using traditional techniques passed down through generations
                  </p>
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Discovered in {artifact.location}, providing insights into ancient Indian culture
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Interactive Section */}
          <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-4">Explore More</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <Calendar className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Timeline Context</h4>
                <p className="text-sm text-gray-600 mt-1">See where this fits in history</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <Palette className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Artistic Style</h4>
                <p className="text-sm text-gray-600 mt-1">Learn about the techniques</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <MapPin className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Cultural Context</h4>
                <p className="text-sm text-gray-600 mt-1">Understand the cultural background</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}