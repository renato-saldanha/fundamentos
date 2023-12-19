import { Post } from './componentes/Post';
import { Header } from './componentes/Header';

import styles from './App.module.css';

import './global.css';
import SideBar from './componentes/Sidebar';

const posts = [
  {
    id: 1,
    autor: {
      avatarUrl: "https://github.com/renato-saldanha.png",
      nome: "Renato Saldanha",
      cargo: "Fullstack Developer"
    },
    conteudo: [
      { tipo: 'p', conteudo : 'Fala galera, soltei uma nova versao do app' },
      { tipo: 'a', conteudo : ' -> renato-saldanha.com/new-project' },
      { tipo: 'a', conteudo : ' #prj ' },
      { tipo: 'a', conteudo : ' #work ' },
    ],
    dataPost: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    autor: {
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTKv-xVD55ZdmkvRH04jXcA7YUgwibAPoww&usqp=CAU",
      nome: "Izabela F",
      cargo: "CEO"
    },
    conteudo: [
      { tipo: 'p', conteudo: 'Bom dia!' },
      { tipo: 'p', conteudo: ' A reunião de hoje foi perfeita! ' },
    ],
    dataPost: new Date('2022-05-17 09:23:00'),
  },
  {
    id: 3,
    autor: {
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      nome: "Leandro Sales",
      cargo: "Tester"
    },
    conteudo: [
      { tipo: 'p', conteudo: 'Os testes estão a mil!!!' },
    ],
    dataPost: new Date('2022-05-28 19:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                autor={post.autor}
                conteudo={post.conteudo}
                dataPost={post.dataPost} />
            )
          })}
        </main>
      </div>


    </div>

  )
}

