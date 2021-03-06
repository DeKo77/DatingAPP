import {Photo} from './photo';

export interface User {
    id: number ;
    username: string ;
    knownAs: string; 
    gender: string ; 
    age:number;
    created: Date; 
    lastActive:Date;
    photoUrl:string ;
    city:string;
    country:string;
    intrests?:string;
    introduction?:string;
    lookingFor?:string;
    photos?: Photo[];

}
