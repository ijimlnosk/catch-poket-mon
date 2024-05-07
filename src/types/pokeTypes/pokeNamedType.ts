export interface PokeNamedRoot {
    count: number;
    next: string;
    previous: unknown;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}
