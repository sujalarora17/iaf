import { Period } from '../types';

export const periods: Period[] = [
  {
    id: 'indus-valley',
    name: 'Indus Valley Civilization',
    dateRange: '3300-1300 BCE',
    description: 'One of the world\'s earliest urban civilizations, known for sophisticated city planning and distinctive art forms.',
    color: '#8B5CF6',
    artifacts: [
      {
        id: 'dancing-girl',
        name: 'Dancing Girl of Mohenjo-daro',
        creator: 'Unknown Harappan Artisan',
        period: 'Indus Valley Civilization',
        dateRange: '2500-1900 BCE',
        location: 'Mohenjo-daro, Pakistan',
        description: 'A bronze sculpture of a dancing girl, representing one of the earliest examples of metal casting in the Indian subcontinent.',
        significance: 'Demonstrates advanced metallurgy and artistic sophistication of the Harappan civilization.',
        imageUrl: 'https://images.pexels.com/photos/8728558/pexels-photo-8728558.jpeg',
        materials: ['Bronze'],
        dimensions: '10.5 cm height',
        currentLocation: 'National Museum, New Delhi'
      },
      {
        id: 'priest-king',
        name: 'Priest-King Sculpture',
        creator: 'Unknown Harappan Sculptor',
        period: 'Indus Valley Civilization',
        dateRange: '2500-1900 BCE',
        location: 'Mohenjo-daro, Pakistan',
        description: 'A limestone sculpture depicting a bearded figure, possibly a priest or ruler, showcasing early sculptural traditions.',
        significance: 'Represents early religious or political authority and artistic expression in urban civilization.',
        imageUrl: 'https://images.pexels.com/photos/8728557/pexels-photo-8728557.jpeg',
        materials: ['Limestone'],
        dimensions: '17.5 cm height',
        currentLocation: 'National Museum of Pakistan, Karachi'
      }
    ]
  },
  {
    id: 'mauryan',
    name: 'Mauryan Period',
    dateRange: '322-185 BCE',
    description: 'The first major empire of ancient India, marked by Buddhist art and monumental architecture.',
    color: '#F59E0B',
    artifacts: [
      {
        id: 'ashoka-pillar',
        name: 'Ashoka Pillar Capital',
        creator: 'Imperial Mauryan Craftsmen',
        period: 'Mauryan Period',
        dateRange: '3rd century BCE',
        location: 'Sarnath, Uttar Pradesh',
        description: 'The iconic four-lion capital that became India\'s national emblem, representing Emperor Ashoka\'s Buddhist empire.',
        significance: 'Symbol of dharma and the spread of Buddhism; adopted as India\'s national emblem.',
        imageUrl: 'https://images.pexels.com/photos/15411919/pexels-photo-15411919.jpeg',
        materials: ['Sandstone'],
        dimensions: '2.1 meters height',
        currentLocation: 'Sarnath Museum'
      },
      {
        id: 'yakshi-didarganj',
        name: 'Didarganj Yakshi',
        creator: 'Mauryan Master Sculptor',
        period: 'Mauryan Period',
        dateRange: '3rd century BCE',
        location: 'Didarganj, Bihar',
        description: 'A highly polished sandstone sculpture of a yakshi (female nature spirit), showcasing Mauryan sculptural mastery.',
        significance: 'Represents the pinnacle of Mauryan stone sculpture with its mirror-like polish and naturalistic form.',
        imageUrl: 'https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg',
        materials: ['Polished sandstone'],
        dimensions: '1.63 meters height',
        currentLocation: 'Patna Museum'
      }
    ]
  },
  {
    id: 'gupta',
    name: 'Gupta Period',
    dateRange: '4th-6th century CE',
    description: 'The Golden Age of Indian culture, marked by classical Hindu and Buddhist art reaching new heights.',
    color: '#DC2626',
    artifacts: [
      {
        id: 'buddha-sarnath',
        name: 'Buddha from Sarnath',
        creator: 'Gupta Period Master Sculptor',
        period: 'Gupta Period',
        dateRange: '5th century CE',
        location: 'Sarnath, Uttar Pradesh',
        description: 'A sandstone sculpture representing the Buddha in teaching pose, exemplifying Gupta idealism and spiritual serenity.',
        significance: 'Defines the classical Indian representation of Buddha with perfect proportions and spiritual expression.',
        imageUrl: 'https://images.pexels.com/photos/8588199/pexels-photo-8588199.jpeg',
        materials: ['Sandstone'],
        dimensions: '1.6 meters height',
        currentLocation: 'Sarnath Archaeological Museum'
      },
      {
        id: 'vishnu-dashavatara',
        name: 'Vishnu Dashavatara Temple',
        creator: 'Gupta Temple Architects & Sculptors',
        period: 'Gupta Period',
        dateRange: '6th century CE',
        location: 'Deogarh, Uttar Pradesh',
        description: 'Relief sculptures depicting the ten avatars of Vishnu, showcasing the evolution of Hindu iconography.',
        significance: 'Early example of mature Hindu temple sculpture with complex mythological narratives.',
        imageUrl: 'https://images.pexels.com/photos/15411918/pexels-photo-15411918.jpeg',
        materials: ['Stone'],
        currentLocation: 'Deogarh Temple'
      }
    ]
  },
  {
    id: 'medieval',
    name: 'Medieval Period',
    dateRange: '8th-13th century CE',
    description: 'Era of regional kingdoms and diverse artistic traditions, including the rise of temple architecture.',
    color: '#059669',
    artifacts: [
      {
        id: 'chola-bronze',
        name: 'Chola Bronze Sculptures',
        creator: 'Chola Master Bronze Casters',
        period: 'Medieval Period - Chola Dynasty',
        dateRange: '10th-11th century CE',
        location: 'Tamil Nadu',
        description: 'Exquisite bronze sculptures of Hindu deities, particularly Nataraja (Dancing Shiva), representing divine cosmic dance.',
        significance: 'Pinnacle of bronze casting technique and representation of Hindu philosophy through art.',
        imageUrl: 'https://images.pexels.com/photos/8588200/pexels-photo-8588200.jpeg',
        materials: ['Bronze'],
        currentLocation: 'Various museums and temples'
      },
      {
        id: 'khajuraho-sculptures',
        name: 'Khajuraho Temple Sculptures',
        creator: 'Chandela Dynasty Sculptors',
        period: 'Medieval Period - Chandela Dynasty',
        dateRange: '10th-11th century CE',
        location: 'Khajuraho, Madhya Pradesh',
        description: 'Intricate stone sculptures adorning temple walls, depicting various aspects of life, love, and spirituality.',
        significance: 'Masterpiece of Indian temple architecture and sculptural art celebrating life in all its forms.',
        imageUrl: 'https://images.pexels.com/photos/15411917/pexels-photo-15411917.jpeg',
        materials: ['Sandstone'],
        currentLocation: 'Khajuraho Group of Monuments'
      }
    ]
  },
  {
    id: 'mughal',
    name: 'Mughal Period',
    dateRange: '16th-18th century CE',
    description: 'Islamic artistic traditions merged with Indian styles, creating a distinctive Indo-Islamic art form.',
    color: '#7C3AED',
    artifacts: [
      {
        id: 'taj-mahal',
        name: 'Taj Mahal',
        creator: 'Ustad Ahmad Lahauri (Chief Architect)',
        period: 'Mughal Period',
        dateRange: '1632-1653 CE',
        location: 'Agra, Uttar Pradesh',
        description: 'An ivory-white marble mausoleum combining Islamic, Persian, and Indian architectural styles.',
        significance: 'UNESCO World Heritage Site and one of the New Seven Wonders of the World.',
        imageUrl: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg',
        materials: ['White marble', 'Semi-precious stones'],
        currentLocation: 'Agra, Uttar Pradesh'
      },
      {
        id: 'mughal-miniatures',
        name: 'Mughal Miniature Paintings',
        artist: 'Basawan, Daswanth, Abu\'l Hasan & others',
        period: 'Mughal Period',
        dateRange: '16th-18th century CE',
        location: 'Various Mughal courts',
        description: 'Detailed miniature paintings depicting court life, nature, and historical events in the distinctive Mughal style.',
        significance: 'Represents the fusion of Persian and Indian painting traditions under Mughal patronage.',
        imageUrl: 'https://images.pexels.com/photos/8588201/pexels-photo-8588201.jpeg',
        materials: ['Paper', 'Natural pigments', 'Gold leaf'],
        currentLocation: 'Various museums worldwide'
      }
    ]
  },
  {
    id: 'colonial',
    name: 'Colonial Period',
    dateRange: '18th-20th century CE',
    description: 'Western artistic influences merged with traditional Indian art, creating new hybrid forms.',
    color: '#0891B2',
    artifacts: [
      {
        id: 'company-paintings',
        name: 'Company Paintings',
        artist: 'Various Indian Artists (Shaikh Zain ud-Din, Ram Das, etc.)',
        period: 'Colonial Period',
        dateRange: '18th-19th century CE',
        location: 'Various parts of India',
        description: 'Paintings created by Indian artists for British patrons, documenting Indian life, customs, and natural history.',
        significance: 'Unique blend of European and Indian artistic styles, important historical documentation.',
        imageUrl: 'https://images.pexels.com/photos/8588202/pexels-photo-8588202.jpeg',
        materials: ['Watercolor on paper'],
        currentLocation: 'British Library and various museums'
      },
      {
        id: 'raja-ravi-varma',
        name: 'Raja Ravi Varma Paintings',
        artist: 'Raja Ravi Varma',
        period: 'Colonial Period',
        dateRange: '19th century CE',
        location: 'Kerala and other parts of India',
        description: 'Oil paintings combining European techniques with Indian themes, depicting Hindu mythology and Indian society.',
        significance: 'Pioneer of modern Indian art, bridging traditional and contemporary artistic expressions.',
        imageUrl: 'https://images.pexels.com/photos/8588203/pexels-photo-8588203.jpeg',
        materials: ['Oil on canvas'],
        currentLocation: 'Various museums and private collections'
      }
    ]
  },
  {
    id: 'modern',
    name: 'Modern & Contemporary',
    dateRange: '20th century onwards',
    description: 'Indian artists exploring new forms and techniques while maintaining connection to cultural roots.',
    color: '#DB2777',
    artifacts: [
      {
        id: 'bengal-school',
        name: 'Bengal School Paintings',
        artist: 'Abanindranath Tagore, Nandalal Bose, Jamini Roy',
        period: 'Modern Period',
        dateRange: 'Early 20th century',
        location: 'Bengal, India',
        description: 'Revival movement led by Abanindranath Tagore, returning to indigenous artistic traditions against colonial influence.',
        significance: 'Nationalist art movement that played crucial role in India\'s cultural renaissance.',
        imageUrl: 'https://images.pexels.com/photos/8588204/pexels-photo-8588204.jpeg',
        materials: ['Watercolor', 'Tempera'],
        currentLocation: 'Various museums and galleries'
      },
      {
        id: 'contemporary-art',
        name: 'Contemporary Indian Art',
        artist: 'M.F. Husain, S.H. Raza, F.N. Souza, Tyeb Mehta & others',
        period: 'Contemporary Period',
        dateRange: '1950s onwards',
        location: 'Pan-India',
        description: 'Diverse artistic expressions by modern Indian artists exploring global themes through Indian perspective.',
        significance: 'Represents India\'s place in the global art world while maintaining cultural identity.',
        imageUrl: 'https://images.pexels.com/photos/8588205/pexels-photo-8588205.jpeg',
        materials: ['Mixed media', 'Various contemporary materials'],
        currentLocation: 'Galleries and museums worldwide'
      }
    ]
  }
];