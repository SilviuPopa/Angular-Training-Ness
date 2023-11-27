import { NgIf } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipePipe implements PipeTransform {

  transform(input:string): unknown {
    let output:string = "Hello World";
    
    if(input == "m" || input =="M") output = "male";
    if(input == "f" || input =="F") output = "female";
    
    return output;
  }

}
