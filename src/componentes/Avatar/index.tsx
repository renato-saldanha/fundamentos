import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  avatarComBorda: boolean,
}

export default function Avatar({ avatarComBorda, ...props }: AvatarProps) {
  return (
    <img
      {...props}
      className={avatarComBorda ? styles.avatarComBorda : styles.avatarSemBorda} />
  )
} 