interface Age {
    age:number;
    run(src:string) : void
}



class Animal implements Age{
     age: number;
     

     constructor(age:number){
        this.age = age;
     }

     run(src: string): void {
         
     }

}