import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { PeriodOverview } from './components/PeriodOverview';
import { periods } from './data/artifacts';
import { Period } from './types';

function App() {
  const [selectedPeriod, setSelectedPeriod] = useState<Period | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter periods based on search term
  const filteredPeriods = useMemo(() => {
    if (!searchTerm) return periods;
    
    return periods.filter(period => 
      period.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      period.artifacts.some(artifact => 
        artifact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artifact.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <main className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Interactive Journey Through Indian Art History
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore thousands of years of artistic heritage through an immersive timeline experience. 
            Use the controls to navigate, zoom, and discover the masterpieces that shaped Indian culture.
          </p>
        </div>
        
        <InteractiveTimeline
          onPeriodSelect={setSelectedPeriod}
          selectedPeriod={selectedPeriod}
        />
        
        {searchTerm && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Search Results ({filteredPeriods.length} periods found)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPeriods.map(period => (
                <div
                  key={period.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedPeriod(period)}
                >
                  <div className="flex items-center mb-2">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: period.color }}
                    ></div>
                    <h4 className="font-semibold text-gray-800">{period.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{period.dateRange}</p>
                  <p className="text-xs text-gray-500">
                    {period.artifacts.length} artifact{period.artifacts.length !== 1 ? 's' : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Interactive Indian Art History Timeline. An immersive educational experience exploring India's rich artistic heritage.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <span className="text-gray-500">🎨 7 Historical Periods</span>
            <span className="text-gray-500">🏛️ 14+ Key Artifacts</span>
            <span className="text-gray-500">📚 Educational Content</span>
            <span className="text-gray-500">🔍 Interactive Exploration</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;