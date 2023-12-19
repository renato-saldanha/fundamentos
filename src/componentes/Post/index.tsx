import { ChangeEvent, FormEvent, useState } from 'react';
import Avatar from '../Avatar';
import Comment from '../Comment';
import styles from './Post.module.css';

interface Autor {
  nome: string,
  cargo: string,
  avatarUrl: string
}

interface PostProps {
  autor: Autor,
  conteudo: [
    {
      tipo: string,
      conteudo: string,
    }
  ],
  dataPost: Date
}

export function Post({ autor, conteudo, dataPost }: PostProps) {
  const [novoComentario, setNovoComentario] = useState("");
  const [comentarios, setComentarios] = useState([
    'Uau!',
  ]);

  const isComentarioVazio = novoComentario.length === 0

  const tituloDataPostFormatada = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    year: 'numeric',
    minute: '2-digit'
  }).format(dataPost);

  const dataPostFormatada = () => {
    const diferencaAno = (new Date().getFullYear() - dataPost.getFullYear());

    if (diferencaAno === 0) {
      return 'menos de um ano.';
    } else if (diferencaAno === 1) {
      return '1 ano.';
    } else {
      return 'mais de 1 ano.';
    }
  }

  function handleSubmitComentario(event: FormEvent) {
    event.preventDefault();
    setComentarios([...comentarios, novoComentario]);
    setNovoComentario("");
  }

  function handleNovoComentario(event: ChangeEvent) {
    setNovoComentario(event.target.value);
  }

  function handleDeletarComentario(comentario: string) {
    const listaAtualizada = comentarios.filter(c => { return comentario !== c });
    setComentarios(listaAtualizada);
  }

  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <Avatar avatarComBorda src={autor.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong> {autor.nome}</strong>
            <span> {autor.cargo} </span>
          </div>
        </div>
        <time title={tituloDataPostFormatada} dateTime={dataPost.toISOString()}>
          Publicado há {dataPostFormatada()}
        </time>
      </header>
      <div className={styles.content}>
        {conteudo.map((linha, i) => {
          switch (linha.tipo) {
            case 'a':
              return <p key={i}><a href='#'> {linha.conteudo} </a></p>;
            case 'p':
              return <p key={i}> {linha.conteudo} </p>;
            default:
              return;
          }
        })}
      </div>
      <form className={styles.commentForm} onSubmit={handleSubmitComentario}>
        <strong>Deixe um comentário</strong>
        <textarea value={novoComentario} onChange={handleNovoComentario} placeholder="Comentário..." />
        <footer>
          <button
            type="submit"
            disabled={isComentarioVazio}> Publicar </button>
        </footer>
      </form>

      <div className='commentList'>
        {comentarios.map((comentario, i) => {
          return <Comment
            key={i}
            comentario={comentario}
            handleDeletarComentario={handleDeletarComentario} />
        })}
      </div>
    </article>
  );
}