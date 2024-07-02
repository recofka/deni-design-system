import { AvatarContainer, AvatarStyle } from './Avatar';

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
    border = true,
}: AvatarProps) => {
    return (
        < AvatarContainer >
            <AvatarStyle
                src={src}
                alt={alt}
                size={size}
                border={border}
                className={`avatar`}
            />
        </AvatarContainer >
    );
};
