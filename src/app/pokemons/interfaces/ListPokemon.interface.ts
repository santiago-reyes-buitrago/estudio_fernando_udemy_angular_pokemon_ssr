
export interface ListPokemonInterface {
    next:     string;
    previous: string;
    count:    number;
    results:  Result[];
}

export interface Result {
  id?: string
  name: string;
  url: string;
}
