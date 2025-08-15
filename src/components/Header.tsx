import React from 'react';
import { Palette, Search } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function Header({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Palette className="w-8 h-8 mr-3" />
            <div>
              <h1 className="text-3xl font-bold">Indian Art History Timeline</h1>
              <p className="text-purple-100 mt-1">Explore the rich heritage of Indian artistic traditions</p>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search artifacts..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-lg placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
          </div>
        </div>
      </div>
    </header>
  );
}