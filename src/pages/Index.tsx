import React, { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your App</h1>
        <p className="text-xl text-muted-foreground">Ready for the next screen!</p>
      </div>
    </div>
  );
};

export default Index;
