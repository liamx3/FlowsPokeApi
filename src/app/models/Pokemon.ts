export class Pokemon{
    name: string;
    url: string;
    sprite: string; 
    types: string[] | undefined;
    abilities: string[] | undefined;
    stats: string[] | undefined;

    constructor(name:string, url:string, sprite:string, types:string[], abilities:string[], stats:string[]){
        this.name = name;
        this.url = url;
        this.sprite = sprite;
        this.types = types;
        this.abilities = abilities;
        this.stats = stats;
    }
}

