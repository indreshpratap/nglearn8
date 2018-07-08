import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myjson'})
export class MyjsonPipe implements PipeTransform {
    transform(value: any): any {
        return value? JSON.stringify(value):'';   
    }
}