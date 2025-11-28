const TOTAL_POKEMONS = 50;
const TOTAL_PAGES = 30;
(async () => {
  const fs = require('fs');
  const pokemonsPages = Array.from({length: TOTAL_PAGES}, (_, i) => i + 1)
    .map((id) => `/pokemons/page/${id}`)
  const pokemonsIds = Array.from({length: TOTAL_POKEMONS}, (_, i) => i + 1)
    .map((id) => `/pokemon/${id}`)

  const {results: pokemonsNameList} = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`).then(res => res.json())
  const unitPokemonResults = [...pokemonsPages,...pokemonsIds,...pokemonsNameList.map(pokemon => `/pokemon/${pokemon.name}`)].join('\n')

  fs.writeFileSync('./routes.txt', unitPokemonResults)
  console.log('Routes list generated successfully')
})()
