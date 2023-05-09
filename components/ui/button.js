import Link from "next/link";
import style from "./button.module.css";

function Button(props){
    return(
        <Link href={props.link} className={style.btn}>
            {props.children}
        </Link>
    );
}

export default Button;