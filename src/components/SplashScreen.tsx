import React, { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show logo after 2 seconds
    const showLogoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 2000);

    // Start fade out after 4 seconds (2s wait + 2s display)
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Complete splash screen after 5 seconds (2s + 2s + 1s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(showLogoTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-splash-background flex items-center justify-center">
      {showLogo && (
        <div
          className={`max-w-sm w-full px-8 transition-opacity duration-500 ${
            fadeOut ? 'opacity-0' : 'animate-logo-fade-in'
          }`}
        >
          <img
            src={logo}
            alt="Made by India"
            className="w-full h-auto object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default SplashScreen;