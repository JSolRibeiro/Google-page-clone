import styles from './Footer.module.css';
function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.menu_bottom1}>
                <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">Brasil</a>
            </div>
            <div className={styles.menu_bottom}>
                <div className={styles.menuBottom1}>
                    <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">Sobre</a>
                    <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">Publicidade</a>
                    <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">Negócios</a>
                    <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">Como funciona a pesquisa</a>
                </div>
                <div className = {styles.menuBottom2}>
                    <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">Privacidade</a>
                    <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">Termos</a>
                    <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">Configurações</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;