/**
 * Asset exports and path mappings for brand logos, monograms, and graphic marks.
 */

// Vector SVG logos
import logoGradientSvg from './logo-s/logo-s-gradient.svg';
import logoBlackSvg from './logo-s/logo-s-black.svg';
import logoBlackOnWhiteSvg from './logo-s/logo-s-black-on-white.svg';
import logoMasterGradientSvg from './logo-s/s-logo-2048-gradient.svg';
import logoMasterMonoSvg from './logo-s/s-logo-2048.svg';
import logoBwTransparentSvg from './logo/logo-bw-transparent.svg';
import logoBwSvg from './logo/logo-bw.svg';

// High-resolution PNG logos
import logoGradientPng from './logo-s/logo-s-gradient-1024.png';
import logoBlackPng from './logo-s/logo-s-black-1024.png';
import logoBlackOnWhitePng from './logo-s/logo-s-black-on-white-1024.png';
import logoBwTransparentPng from './logo/logo-bw-transparent-1024.png';
import logoBwWhitePng from './logo/logo-bw-white-1024.png';

export const ASSETS = {
  svg: {
    logoGradient: logoGradientSvg,
    logoBlack: logoBlackSvg,
    logoBlackOnWhite: logoBlackOnWhiteSvg,
    logoMasterGradient: logoMasterGradientSvg,
    logoMasterMono: logoMasterMonoSvg,
    logoBwTransparent: logoBwTransparentSvg,
    logoBw: logoBwSvg,
  },
  png: {
    logoGradient: logoGradientPng,
    logoBlack: logoBlackPng,
    logoBlackOnWhite: logoBlackOnWhitePng,
    logoBwTransparent: logoBwTransparentPng,
    logoBwWhite: logoBwWhitePng,
  },
} as const;

export default ASSETS;
