import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
        {/* Hexagon (Beehive representation) - Darker Amber for light mode contrast */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500 fill-current drop-shadow-sm">
            <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
        </svg>
        
        {/* Wrench (Negative space or overlay) - Stylized */}
        <svg viewBox="0 0 24 24" className="absolute w-[50%] h-[50%] text-white fill-current transform -rotate-45">
             {/* Simple Wrench Icon */}
            <path d="M14.7 2.2C17.6 2.2 20.3 3.5 22 5.8L19.5 8.3C18.6 7.2 17.2 6.5 15.7 6.5C12.5 6.5 9.9 9.1 9.9 12.3C9.9 13.5 10.3 14.6 11 15.5L2.3 24.2L0.9 22.8L9.6 14.1C9 13.1 8.8 11.8 9.1 10.6C9.6 8.3 11.2 6.4 13.3 5.3L12 2.7L14.7 2.2ZM19.5 11.5C20.5 11.5 21.3 12.3 21.3 13.3C21.3 14.3 20.5 15.1 19.5 15.1C18.5 15.1 17.7 14.3 17.7 13.3C17.7 12.3 18.5 11.5 19.5 11.5Z" />
        </svg>
    </div>
  );
};