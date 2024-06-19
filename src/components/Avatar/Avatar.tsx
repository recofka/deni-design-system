import './Avatar.css';

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
    size?: number;
    /**
   * Avatar Border
   */
    border?: boolean;
}

/**
 * Avatar component for displaying profile image
 */
export const Avatar = ({ src, alt = 'Avatar', size = 50, border = false }: AvatarProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`avatar ${border ? 'avatar--border' : ''}`}
            style={{ width: size, height: size, borderRadius: '50%' }}
        />
    );
};
