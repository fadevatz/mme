import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}