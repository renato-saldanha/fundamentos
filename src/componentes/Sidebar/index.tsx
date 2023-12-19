import Avatar from '../Avatar';
import styles from './Sidebar.module.css';


import { PencilSimpleLine } from '@phosphor-icons/react';


export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-UK2L4kcR8KSh1OqemmKNs3zitXQZPLLqg&usqp=CAU" />
      <div className={styles.profile}>
        <Avatar
          avatarComBorda
          src='https://github.com/renato-saldanha.png'
          alt='avatar' />
        <strong>Renato Saldanha</strong>
        <span>Fullstack Developer</span>
      </div>
      <footer>
        <a href='#'>
          <PencilSimpleLine size={16} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
} 