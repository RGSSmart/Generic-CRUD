import { Entity } from "./entity";


export let DATA:Entity[] = [

];

export function updateEntityNameById(id:number , new_name:string){

    // Update po referenci.
    let target = DATA.find(x=> x.id === id); 
    if(target != undefined)
    {   
         target.name = new_name;        
    }else{        
        // nema pod tim id-em
    }
    return DATA;

}
export function deleteById(id:number){
    DATA = DATA.filter(x => x.id != id);
    return DATA;
}