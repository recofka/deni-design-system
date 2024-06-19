import './button.css';
import { styled, variants } from '../styles/index';

const ButtonStyle = styled('button', {
  fontFamily: variants.font.default.fontFamily,
  fontWeight: variants.fontWeight.regular.fontWeight,
  border: 0,
  borderRadius: '0.75rem',
  letterSpacing: '0.9px',
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: 1,

  variants: {
    size: variants.button.size,
    variant: variants.button.variant,
  },

  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },

});

interface ButtonProps {
  /**
   * Prop values to denote styles for the button
   */
  variant: 'primary' | 'secondary';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button text content
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {

  return (
    <ButtonStyle
      type="button"
      size={size}
      variant={variant}
      {...props}
    >
      {label}
    </ButtonStyle>
  );
};
