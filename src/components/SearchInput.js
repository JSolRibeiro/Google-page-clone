import styles from "./searchInput.module.css";
import lupa from "../lupa.svg";
import teclado from "../teclado.svg";
import microfone from "../microfone.svg"

function SearchInput() {
    return (
        <div className={styles.wrapper}>
            <input type="text" className={styles.inputGoogle} />
            <img src={lupa} className={styles.lupa} alt="erro" />
            <div className={styles.inputButtons}>
                <button className={styles.teclado} title="assistência de teclado">
                    <img src={teclado} alt="erro" />
                </button>
                <button className={styles.microfone} title="Pesquisa por voz">
                    <img src={microfone} alt="erro" />
                </button>
            </div>
        </div>
    )
}
export default SearchInput;