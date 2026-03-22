import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800" style={{ paddingTop: '24px' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6 pb-4">
          <Link to="/" className="text-gray-200 hover:text-gray-100">
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Roboto, sans-serif', color: '#E1E1E1' }}>
              Martina Francone
            </h2>
          </Link>

          <div className="flex" style={{ gap: '24px' }}>
            <Link to="/design" className="text-base" style={{ fontFamily: 'Roboto, sans-serif', color: '#E1E1E1' }}>
              Design
            </Link>
            <Link to="/illustration" className="text-base" style={{ fontFamily: 'Roboto, sans-serif', color: '#E1E1E1' }}>
              Illustration
            </Link>
            <Link to="/about" className="text-base" style={{ fontFamily: 'Roboto, sans-serif', color: '#E1E1E1' }}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
