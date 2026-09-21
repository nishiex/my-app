import type { LucideIcon } from 'lucide-react';
import {
  Accessibility,
  Gamepad2,
  HeartHandshake,
  PanelsTopLeft,
  Wrench,
  MonitorPlay,
  WalletCards,
} from 'lucide-react';

export type ProductFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  glow: string;
};

export const FEATURES: ProductFeature[] = [
  {
    title: 'Motion Sensor Technology',
    description: 'Full body, controller-free gaming',
    icon: Accessibility,
    color: 'text-cyan-300',
    glow: 'shadow-[0_0_22px_rgba(34,211,238,0.28)]',
  },
  {
    title: 'Wide Range of Games',
    description: 'Sports, Adventure, Fitness & More',
    icon: Gamepad2,
    color: 'text-fuchsia-400',
    glow: 'shadow-[0_0_22px_rgba(232,121,249,0.26)]',
  },
  {
    title: 'Engaging & Healthy',
    description: 'Fun + Physical Activity',
    icon: HeartHandshake,
    color: 'text-cyan-300',
    glow: 'shadow-[0_0_22px_rgba(34,211,238,0.28)]',
  },
  {
    title: 'Compact & Stylish',
    description: 'Modern design, fits any space',
    icon: PanelsTopLeft,
    color: 'text-fuchsia-400',
    glow: 'shadow-[0_0_22px_rgba(232,121,249,0.26)]',
  },
  {
    title: 'Easy Installation',
    description: 'Plug & Play',
    icon: Wrench,
    color: 'text-cyan-300',
    glow: 'shadow-[0_0_22px_rgba(34,211,238,0.28)]',
  },
  {
    title: 'Remote Content Management',
    description: 'Add new games anytime',
    icon: MonitorPlay,
    color: 'text-fuchsia-400',
    glow: 'shadow-[0_0_22px_rgba(232,121,249,0.26)]',
  },
  {
    title: 'Secure Payments',
    description: 'UPI, Card & Wallet Support',
    icon: WalletCards,
    color: 'text-cyan-300',
    glow: 'shadow-[0_0_22px_rgba(34,211,238,0.28)]',
  },
];
