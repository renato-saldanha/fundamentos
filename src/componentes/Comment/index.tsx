import { useState } from 'react';
import Avatar from '../Avatar';
import styles from './Comentario.module.css';

import { ThumbsUp, Trash } from '@phosphor-icons/react';

interface CommentProps {
  comentario: string,
  handleDeletarComentario: (comentario: string) => {comentario:string};
}

export default function Comment({ comentario, handleDeletarComentario }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeCount() {
    setLikeCount(likeCount + 1)
  }
  return (
    <div className={styles.comment}>
      <Avatar
        avatarComBorda={false}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTKv-xVD55ZdmkvRH04jXcA7YUgwibAPoww&usqp=CAU'
        alt='avatar' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Izabela F.</strong>
              <b> (outra pessoa) </b>
              <time title='17 de Maio de 2022 as 12:28:25' dateTime='2022-05-17' > Cerca de 1 ano atrás</time>
            </div>
            <button
              title='Deletar comentário'
              onClick={() => handleDeletarComentario(comentario)}>
              <Trash size={16} />
            </button>
          </header>
          <div>
            <p> {comentario} </p>
          </div>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp size={16} />
            <p> Curtidas<span>{likeCount}</span></p>
          </button>
          <b> </b>
        </footer>
      </div>
    </div>
  )
}