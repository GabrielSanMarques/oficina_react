import './Loja.css';

export default function Loja(props) {
    return (
        <section className='Loja'>
            <h1>Loja</h1>
        </section>
    );
};

function Upgrade(props) {
    return (
        <button 
            id={props.id} 
            className='upgrade' 
            onClick={props.handleClick}
        >
            <p>{props.custo}o</p>
            <p>{props.texto}</p>
            <p>{props.velocidade}x -{'>'} 
                {props.velocidade + 1}x
            </p>
        </button>   
    );
};
