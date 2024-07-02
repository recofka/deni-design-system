import { useState } from 'react';
import { ButtonStyle } from './Style';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick,
  ...props
}: ButtonProps) => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 750);
  };

  return (
    <ButtonStyle
      type="button"
      size={size}
      variant={variant}
      className={`bubbly-button ${animate ? 'animate' : ''}`}
      onClick={handleClick}
      {...props}
    >
      {label}
    </ButtonStyle>
  );
};
