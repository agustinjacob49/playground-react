import CharacterTable from '../../components/characterTable/index';
const React = require('react');
const { useEffect, useState } = require('react');
const { fetchMovies } = require('./hooks/fetchMovies');


const Home = () => {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (loading){
            fetchMovies('query')
            .then( response => {
                debugger;
                setResponse(response);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            });
        }
    })


    return (
        <div>
            { loading ? <h1>Cargando</h1> : <CharacterTable characters={response}/>}
            { error && (<h1>error</h1>) }
        </div>
        
    )
};

export default Home;