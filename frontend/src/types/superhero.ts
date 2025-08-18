export type Superhero = {
    id: number;
    nickname: string;
    realName: string;
    originDescription: string;
    superpowers: string;
    catchPhrase: string;
    images: string[];
}

export type SuperheroState = {
    items: Superhero[],
    status: 'loading' | 'loaded' | 'rejected',
    error: string | null
}

export type SuperheroFormData = {
    nickname: string;
    realName: string;
    originDescription: string;
    superpowers: string;
    catchPhrase: string;
    images: FileList;
}