import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  //appId: 'io.ionic.starter',
  appId: 'io.faelizCrianca.starternew',
  appName: 'projeto-crianca-feliz-2023',
  webDir: 'www',
  bundledWebRuntime: false,

  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
