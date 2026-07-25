import React, { useEffect, useState } from "react";
import "./Pokemon.css"

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonId, setPokemonId] = useState(1);
  const [loading, setLoading] = useState(true);

  

//   const fetchPokemon = () => {
//     fetch(API)
//       .then((res) => res.json())
//       .then((data) => setPokemon(data))
//       .catch((error) => console.log(error));
//   };


useEffect (() => {
    const fetchPokemon = async () => {
    try {
        setLoading(true);

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

        if(!res.ok) {
            throw new Error("Failed to fetch pokemon, Try Again after sometime")
        }
        const data = await res.json();

        setPokemon(data);
    } catch(err) {
        console.log(err);
        
    }finally {
        setLoading(false);
    }
};
    fetchPokemon();
},[pokemonId])




if(loading) {
    return <h2>Loading......</h2>
}

  return (
    <section className="container">
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">

    <span className="type">
        {pokemon?.types[0]?.type?.name}
    </span>

    <figure>
        <img
            src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
            alt={pokemon?.name}
        />
    </figure>

    <h2 className="name">{pokemon?.name}</h2>

    <p className="id">
        #{pokemon?.id}
    </p>

    <div className="stats">

        <div className="stat">
            <h4>Height</h4>
            <p>{pokemon?.height}</p>
        </div>

        <div className="stat">
            <h4>Weight</h4>
            <p>{pokemon?.weight}</p>
        </div>

        <div className="stat">
            <h4>Attack</h4>
            <p>{pokemon?.stats?.[1]?.base_stat}</p>
        </div>

        <div className="stat">
            <h4>Defense</h4>
            <p>{pokemon?.stats?.[2]?.base_stat}</p>
        </div>

    </div>

</li>
      </ul>
      <button onClick={() => setPokemonId(prev => prev + 1)}>Click Next Pokemon</button>
    </section>
  );
};

export default Pokemon;
