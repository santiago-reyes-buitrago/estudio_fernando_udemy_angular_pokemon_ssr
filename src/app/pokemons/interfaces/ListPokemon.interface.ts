
export interface ListPokemonInterface {
    next:     string;
    previous: string;
    count:    number;
    results:  Result[];
}

export interface Result {
  name: string;
  url: string;
}
