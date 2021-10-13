export class Book {

    reference : string;
    title : string;
    author : string;
    popularity : number;
    price : number;
    image : string;
    gender : string;

    constructor (reference : string, title : string, author : string, popularity : number, price : number, image : string, gender : string){
        this.reference = reference;
        this.title = title;
        this.author = author;
        this.popularity = popularity;
        this.price = price;
        this.image = image;
        this.gender = gender;
    }

}

