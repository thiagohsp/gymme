import { extendTheme } from "@chakra-ui/react";

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: '1.125rem',
    textTransform: 'uppercase',
    borderRadius: '1px', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: '0.75rem',
      px: '2rem', // <-- px is short for paddingLeft and paddingRight
      py: '0.75rem', // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: '0.75rem',
      px: '2.5rem', // <-- these values are tokens from the design system
      py: '1rem', // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outlined: {
      border: '1px solid',
      borderColor: 'neutral.500',
      color: 'neutral.500',
    },
    primary: {
      bg: 'primary.200',
      color: 'neutral.100',
    },
    secondary: {
      bg: 'neutral.100',
      border: '2px solid',
      borderColor: 'neutral.100',
      color: 'neutral.500',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
}

export default extendTheme({
  global: {
    body: {
      bg: '#131316'
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Open Sans'
  },
  colors: {
    primary: {
      100: '#A5FFCE',
      200: '#4AE290',
      300: '#25C870'
    },
    neutral: {
      100: '#FFFFFF',
      200: '#DEDEE3',
      300: '#9797A1',
      400: '#595962',
      500: '#131316',
    }
  },
  textStyles: {
    h1: {
      fontFamily: 'Inter',
      fontSize: '3.75rem',
      fontWeight: '800',
      lineHeight: '3.875rem',
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: '3rem',
      fontWeight: '800',
      lineHeight: '3rem',
    },
    h3: {
      fontFamily: 'Inter',
      fontSize: '2.75rem',
      fontWeight: '800',
      lineHeight: '2.875rem',
    },
    h4: {
      fontFamily: 'Inter',
      fontSize: '1.875rem',
      fontWeight: '800',
      lineHeight: '2.875rem',
    },
    h5: {
      fontFamily: 'Inter',
      fontSize: '1.5rem',
      fontWeight: '800',
      lineHeight: '2rem',
    },
    h6: {
      fontFamily: 'Inter',
      fontSize: '1.125rem',
      fontWeight: '700',
      lineHeight: '1.75rem',
    },
    lg: {
      fontFamily: 'Open Sans',
      fontSize: '1.5rem',
      fontWeight: '400',
      lineHeight: '2.125rem',
    },
    md: {
      fontFamily: 'Open Sans',
      fontSize: '1.25rem',
      fontWeight: '400',
      lineHeight: '2rem',
    },
    sm: {
      fontFamily: 'Open Sans',
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.625rem',
    },
  },
  components: {
    Button,
  },
})