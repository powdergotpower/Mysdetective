import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.df16427aed354d71a38d2973fbca8b1a',
  appName: 'splashdeck-auto',
  webDir: 'dist',
  server: {
    url: 'https://df16427a-ed35-4d71-a38d-2973fbca8b1a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;