import filmes from '../Services/dados'

const OutraLista = () =>{
    return(
        <div>
            {filmes.map(filme => 
                <ul>
                    <li>
                        {filme.nome}
                    </li>                    
                </ul>
            )
                
            }
        </div>
    )
}

export default OutraLista