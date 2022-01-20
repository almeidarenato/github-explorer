import { RepositoryItem } from "./RepositoryItem"
const repository = {
    name:"teste",
    description:"teste de repositorio",
    link:'https://github.com/almeidarenato/'

}
export function RepositoryList() {
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem 
                repository={repository}
                />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )

}