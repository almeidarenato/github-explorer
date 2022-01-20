const repositoryName = 'Teste'

export function RepositoryList() {
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Descrição do Repositório</p>
                    <a href="#">Acessar Repositório</a>
                </li>
                <li>
                    <strong>nome do repositório</strong>
                    <p>Descrição do Repositório</p>
                    <a href="#">Acessar Repositório</a>
                </li>
                <li>
                    <strong>nome do repositório</strong>
                    <p>Descrição do Repositório</p>
                    <a href="#">Acessar Repositório</a>
                </li>
                <li>
                    <strong>nome do repositório</strong>
                    <p>Descrição do Repositório</p>
                    <a href="#">Acessar Repositório</a>
                </li>
            </ul>
        </section>
    )

}