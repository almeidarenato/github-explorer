import { RepositoryItem } from "./RepositoryItem"
import { useState,useEffect } from "react"
import '../styles/repositories.scss'

export function RepositoryList() {
    const [repositories,setRepositories] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/almeidarenato/repos')
        .then(response => response.json() )
        .then(data => setRepositories(data))
    },[])

    return(
        <section className="repository__list">
            <h1>Lista de repositórios</h1>
            <ul>
                {
                repositories.map(repository =>{
                   return <RepositoryItem repository={repository} key={repository.id}/>
                    })}
                
               
            </ul>
        </section>
    )

}