import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
        {/* Hexagon (Beehive representation) */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400 fill-current drop-shadow-lg">
            <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
        </svg>
        
        {/* Wrench (Negative space or overlay) - Stylized */}
        <svg viewBox="0 0 24 24" className="absolute w-[50%] h-[50%] text-slate-900 fill-current transform -rotate-45">
            <path d="M22.7 13.5L20.8 21.4C20.6 22.3 19.7 23 18.7 23H13.8C12.8 23 11.9 22.3 11.7 21.4L10.9 18.2C10.4 18 9.9 17.7 9.5 17.4L6.6 18.9C5.7 19.3 4.6 19.1 4 18.3L1.5 14C0.9 13.2 1.1 12.1 1.9 11.5L4.4 9.6C4.4 9.4 4.4 9.1 4.4 8.9C4.4 8.6 4.4 8.4 4.4 8.1L1.9 6.2C1.1 5.6 0.9 4.5 1.5 3.7L4 1.4C4.6 0.6 5.7 0.4 6.6 0.8L9.5 2.3C9.9 2 10.4 1.7 10.9 1.5L11.7 0.6C11.9 -0.3 12.8 -1 13.8 -1H18.7C19.7 -1 20.6 -0.3 20.8 0.6L22.7 8.5" opacity="0"/> 
             {/* Simple Wrench Icon */}
            <path d="M14.7 2.2C17.6 2.2 20.3 3.5 22 5.8L19.5 8.3C18.6 7.2 17.2 6.5 15.7 6.5C12.5 6.5 9.9 9.1 9.9 12.3C9.9 13.5 10.3 14.6 11 15.5L2.3 24.2L0.9 22.8L9.6 14.1C9 13.1 8.8 11.8 9.1 10.6C9.6 8.3 11.2 6.4 13.3 5.3L12 2.7L14.7 2.2ZM19.5 11.5C20.5 11.5 21.3 12.3 21.3 13.3C21.3 14.3 20.5 15.1 19.5 15.1C18.5 15.1 17.7 14.3 17.7 13.3C17.7 12.3 18.5 11.5 19.5 11.5Z" />
        </svg>
    </div>
  );
};