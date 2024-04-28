import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'VideoPlayer',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
