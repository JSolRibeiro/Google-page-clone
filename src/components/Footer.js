import styles from './Footer.module.css';
function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.menu_bottom1}>
                <a href="#">Brasil</a>
            </div>
            <div className={styles.menu_bottom}>
                <div className={styles.menuBottom1}>
                    <a href="#">Sobre</a>
                    <a href="#">Publicidade</a>
                    <a href="#">Negócios</a>
                    <a href="#">Como funciona a pesquisa</a>
                </div>
                <div className = {styles.menuBottom2}>
                    <a href="#">Privacidade</a>
                    <a href="#">Termos</a>
                    <a href="#">Configurações</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;