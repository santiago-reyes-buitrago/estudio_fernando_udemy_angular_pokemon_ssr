export interface PokemonInterface {
    cries:                    Cries;
    location_area_encounters: string;
    types:                    Type[];
    base_experience:          number;
    held_items:               HeldItem[];
    weight:                   number;
    is_default:               boolean;
    past_types:               any[];
    sprites:                  Sprites;
    past_abilities:           PastAbility[];
    abilities:                PokemonAbility[];
    game_indices:             GameIndex[];
    species:                  Species;
    stats:                    Stat[];
    moves:                    Move[];
    name:                     string;
    id:                       number;
    forms:                    Species[];
    height:                   number;
    order:                    number;
}

export interface PokemonAbility {
    is_hidden: boolean;
    ability:   Species;
    slot:      number;
}

export interface Species {
    name: string;
    url:  string;
}

export interface Cries {
    legacy: string;
    latest: string;
}

export interface GameIndex {
    game_index: number;
    version:    Species;
}

export interface HeldItem {
    item:            Species;
    version_details: VersionDetail[];
}

export interface VersionDetail {
    version: Species;
    rarity:  number;
}

export interface Move {
    version_group_details: VersionGroupDetail[];
    move:                  Species;
}

export interface VersionGroupDetail {
    level_learned_at:  number;
    version_group:     Species;
    move_learn_method: Species;
}

export interface PastAbility {
    abilities:  PastAbilityAbility[];
    generation: Species;
}

export interface PastAbilityAbility {
    is_hidden: boolean;
    slot:      number;
}

export interface Sprites {
    other:         Other;
    back_default:  string;
    front_default: string;
    versions:      Versions;
    back_shiny:    string;
    front_shiny:   string;
}

export interface Other {
    dream_world:        DreamWorld;
    showdown:           Showdown;
    "official-artwork": Home;
    home:               Home;
}

export interface DreamWorld {
    front_default: string;
}

export interface Home {
    front_default: string;
    front_shiny:   string;
}

export interface Showdown {
    back_default:       string;
    front_default:      string;
    back_shiny:         string;
    front_shiny:        string;
    front_transparent?: string;
    animated?:          Showdown;
}

export interface Versions {
    "generation-iii":  GenerationIii;
    "generation-ii":   GenerationIi;
    "generation-v":    GenerationV;
    "generation-iv":   GenerationIv;
    "generation-vii":  GenerationVii;
    "generation-i":    GenerationI;
    "generation-viii": GenerationViii;
    "generation-vi":   { [key: string]: Home };
}

export interface GenerationI {
    yellow:     RedBlue;
    "red-blue": RedBlue;
}

export interface RedBlue {
    front_gray:        string;
    back_transparent:  string;
    back_default:      string;
    back_gray:         string;
    front_default:     string;
    front_transparent: string;
}

export interface GenerationIi {
    gold:    Showdown;
    crystal: Crystal;
    silver:  Showdown;
}

export interface Crystal {
    back_transparent:        string;
    back_shiny_transparent:  string;
    back_default:            string;
    front_default:           string;
    front_transparent:       string;
    front_shiny_transparent: string;
    back_shiny:              string;
    front_shiny:             string;
}

export interface GenerationIii {
    "firered-leafgreen": Showdown;
    "ruby-sapphire":     Showdown;
    emerald:             Home;
}

export interface GenerationIv {
    platinum:               Showdown;
    "diamond-pearl":        Showdown;
    "heartgold-soulsilver": Showdown;
}

export interface GenerationV {
    "black-white": Showdown;
}

export interface GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Stat {
    stat:      Species;
    base_stat: number;
    effort:    number;
}

export interface Type {
    slot: number;
    type: Species;
}
