import React from 'react';

const getOccupations = (occupations) => (
    occupations.map( o => <p>{o}</p>)
)

const getCharacterRow = ({char_id, name, birthday, occupation : occupations}) => (
    <tr>
        <td>{char_id}</td>
        <td>{name}</td>
        <td>{birthday}</td>
        {getOccupations(occupations)}
    </tr>
);

const CharacterTable = ({characters}) => {
    return (
        <React.Fragment>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Occupations</th>
                </tr>
                {characters.map( char => getCharacterRow(char))}
            </table>
        </React.Fragment>
    );
}

export default CharacterTable;