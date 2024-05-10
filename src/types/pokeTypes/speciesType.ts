export interface SpeciesRoot {
    capture_rate: number;
    color: Color;
    names: Name[];
}
export interface Color {
    name: string;
}
export interface Name {
    name: string;
    language: Language;
}

export interface Language {
    name: string;
    url: string;
}
