export interface RateOption {
  id: string;
  name: string;
  teams: number;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const rateOptions: RateOption[] = [
  {
    id: 'starter',
    name: 'Starter League',
    teams: 4,
    description: 'Perfect for small groups and beginners',
    price: 'Contact for pricing',
    features: [
      '4 teams maximum',
      'Basic auction features',
      'Email support',
      'Standard bidding time'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Tournament',
    teams: 8,
    description: 'Most popular for competitive leagues',
    price: 'Contact for pricing',
    features: [
      '8 teams maximum',
      'Advanced auction tools',
      'Priority support',
      'Extended bidding time',
      'Custom team names'
    ],
    popular: true
  },
  {
    id: 'championship',
    name: 'Championship',
    teams: 16,
    description: 'For serious cricket enthusiasts',
    price: 'Contact for pricing',
    features: [
      '16 teams maximum',
      'Premium auction features',
      '24/7 dedicated support',
      'Flexible bidding rules',
      'Advanced analytics',
      'Custom branding'
    ]
  }
];

