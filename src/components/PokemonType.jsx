const PokemonType = (pokemon) => {
    return (
        <>
            Type :{' '}
            {pokemon.pokemon.type.map((type) => (
                <>
                    <span className={`type ${type}`}>
                        {type}
                    </span>
                </>
            ))}
        </>
    )
}

export default PokemonType;