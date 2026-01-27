import { AppConfig, UserSession, showConnect } from '@stacks/connect';

const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig });

export const connectWallet = () => {
  showConnect({
    appDetails: { name: 'BitTask', icon: '/favicon.ico' },
    onFinish: () => window.location.reload(),
    userSession,
  });
};

export const disconnectWallet = () => {
  userSession.signUserOut();
  window.location.reload();
};

export const getWalletAddress = (): string | null => {
  return userSession.isUserSignedIn() ? userSession.loadUserData().profile.stxAddress.testnet : null;
};
