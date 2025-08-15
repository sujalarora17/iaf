import React from 'react';
import { Period } from '../types';

interface PeriodOverviewProps {
  period: Period;
}

export function PeriodOverview({ period }: PeriodOverviewProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div className="flex items-center mb-4">
        <div
          className="w-6 h-6 rounded-full mr-4"
          style={{ backgroundColor: period.color }}
        ></div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{period.name}</h2>
          <p className="text-gray-600 font-medium">{period.dateRange}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed text-lg">{period.description}</p>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Key Artifacts ({period.artifacts.length})
        </h3>
        <div className="flex flex-wrap gap-2">
          {period.artifacts.map((artifact) => (
            <span
              key={artifact.id}
              className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200 transition-colors"
            >
              {artifact.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}