import type { Route } from './+types/Home';

import '@/styles/home.css';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function HomePage() {
  return (
    <div className="home-container">
      <span className="brand-text-color">ghost UI</span>
    </div>
  );
}
