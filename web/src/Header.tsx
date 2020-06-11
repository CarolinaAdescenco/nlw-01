import React, {useState} from "react"

interface HeaderProps {
    title: string;
    //title?: string (title seria opcional)
}



const Header: React.FC<HeaderProps> = (props) => { 
    //Sempre retorna um array [valor do estado, função para atualizar valor do estado]
    const [counter, setCounter] = useState(0); 

    function handleButtonClick(){
    setCounter(counter + 1)
    }

    return(
        <header>
            <h1>{props.title}</h1>

            <p>{counter}</p>
            <button type="button" onClick={handleButtonClick}>Adicionar</button>
        </header>
    )
}

export default Header