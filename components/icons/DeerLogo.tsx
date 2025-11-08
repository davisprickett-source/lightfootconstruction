
import React from 'react';

type DeerLogoVariant = 'white' | 'charcoal';

interface DeerLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: DeerLogoVariant;
}

const variantSrc: Record<DeerLogoVariant, string> = {
  white: '/images/deer-logo.png',
  charcoal: '/images/deer-logo-charcoal.png',
};

/**
 * Wrapper component so header/footer can treat the crest like an image while keeping a single source of truth.
 */
export const DeerLogo: React.FC<DeerLogoProps> = ({
  alt = 'Lightfoot & Lightfoot deer logo',
  variant = 'white',
  ...props
}) => (
  <img src={variantSrc[variant]} alt={alt} {...props} />
);
