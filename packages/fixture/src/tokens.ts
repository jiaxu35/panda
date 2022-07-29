import { Tokens } from '@css-panda/types';

export const semanticTokens = {
  colors: {
    primary: { _: '$red.500', dark: '$red.400' },
    secondary: { _: '$red.800', dark: '$red.700' },
  },
  spacing: {
    gutter: { _: '$4', lg: '$5', dark: '40px' },
  },
};

export const tokens: Tokens = {
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont',
    body: 'Helvetica, Arial, sans-serif',
    mono: 'SFMono-Regular, Menlo, Monaco',
  },
  colors: {
    current: 'currentColor',
    gray: {
      '50': '#FAFAFA',
      '100': '#F5F5F5',
      '200': '#E5E5E5',
      '300': '#D4D4D4',
      '400': '#A3A3A3',
      '500': '#737373',
      '600': '#525252',
      '700': '#333333',
      '800': '#121212',
      '900': '#0A0A0A',
    },
    green: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    },
    red: {
      '50': '#FEF2F2',
      '100': '#FEE2E2',
      '200': '#FECACA',
      '300': '#FCA5A5',
      '400': '#F87171',
      '500': '#EF4444',
      '600': '#DC2626',
      '700': '#B91C1C',
      '800': '#991B1B',
      '900': '#7F1D1D',
    },
  },
  fontSizes: {
    sm: '0.5rem',
    xs: '0.75rem',
    md: '0.875rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  spacing: {
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
  },
  sizes: {
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
  },
  largeSizes: {
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
  },
  animations: {
    none: 'none',
    spin: 'spin 1s linear infinite',
    ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'bounce 1s infinite',
  },
  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1',
  },
  easings: {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
  },
  durations: {
    '75': '75ms',
    '100': '100ms',
    '150': '150ms',
  },
  transitionProperties: {
    all: 'all',
    none: 'none',
    background: 'background, background-color',
    colors: 'color, background-color',
  },
};
