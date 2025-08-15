export interface Artifact {
  id: string;
  name: string;
  artist?: string;
  creator?: string;
  period: string;
  dateRange: string;
  location: string;
  description: string;
  significance: string;
  imageUrl: string;
  materials: string[];
  dimensions?: string;
  currentLocation?: string;
}

export interface Period {
  id: string;
  name: string;
  dateRange: string;
  description: string;
  color: string;
  artifacts: Artifact[];
}