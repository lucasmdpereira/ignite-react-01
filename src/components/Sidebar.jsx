import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1659205619507-e3892b32947a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=10" alt="" />
        
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/lucasmdpereira.png" alt="" />
                <strong>Diego Fernandes</strong>
                <span>Web Developer</span> 
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}