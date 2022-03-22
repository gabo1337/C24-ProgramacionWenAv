
import {peliculas} from './peliculas.js';

for (let i=0;i<peliculas.length;i++){
    if(peliculas[i].original_language == "en"){
        console.log(peliculas[i].title);
    }
    
    
}


console.log(peliculas.length);
console.log(peliculas[0].title);