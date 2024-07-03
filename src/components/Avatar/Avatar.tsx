import { AvatarContainer, AvatarStyle } from './AvatarStyle';

interface AvatarProps {
    /**
     * Avatar image URL
     */
    src: string;
    /**
     * Alternative text for the image
     */
    alt?: string;
    /**
     * Avatar size
     */
    size?: 'small' | 'medium' | 'large';
    /**
   * Avatar Border
   */
    border?: boolean;
}

/**
 * Avatar component for displaying profile image
 */
export const Avatar = ({
    src,
    alt = 'Avatar',
    size = 'small',
    border = false,
}: AvatarProps) => {
    return (
        <AvatarContainer border={border}>
            <AvatarStyle
                src={src}
                alt={alt}
                size={size}
                className={`avatar`}
            />
        </AvatarContainer >
    );
};
