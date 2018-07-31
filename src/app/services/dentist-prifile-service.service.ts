import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DentistProfileService {

  dentists = [
    {name: 'Mike Garsia', image: 'http://static.boxrec.com/thumb/a/a9/MGarcia.jpg/200px-MGarcia.jpg'},
    {name: 'Robert Easter', image: 'http://static.boxrec.com/thumb/3/37/RobertEasterJr.jpg/200px-RobertEasterJr.jpg'},
    {name: 'Terence Crawford', image: 'http://static.boxrec.com/thumb/7/70/Crawford_Terence.jpg/200px-Crawford_Terence.jpg'},
    {name: 'Brandon Rios', image: 'http://static.boxrec.com/thumb/d/d4/Rios.Brandon.jpg/200px-Rios.Brandon.jpg'},
    {name: 'Kell Brook', image: 'http://static.boxrec.com/thumb/6/6a/KELL_BROOK_21.jpg/200px-KELL_BROOK_21.jpg'},
    {name: 'Daniel Garsia', image: 'http://static.boxrec.com/thumb/c/c3/Daniel_Oscar_Garcia.jpg/200px-Daniel_Oscar_Garcia.jpg'},
    {name: 'Shon Porter', image: 'http://static.boxrec.com/thumb/c/c4/Porter-large1.jpg/200px-Porter-large1.jpg'},
    {name: 'Luis Collazo', image: 'http://static.boxrec.com/thumb/6/64/Luis_Collazo.jpg/200px-Luis_Collazo.jpg'},
    {name: 'Amir Khan', image: 'http://static.boxrec.com/thumb/7/7b/Amir_Khan.jpeg/200px-Amir_Khan.jpeg'},
  ];

  constructor() { }
}
