import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'money'
})

export class MoneyPipe implements PipeTransform{
    transform(value: number, ...args: any[]) {
        if(value&&!isNaN(value)){
            let newValue = value.toString();
            newValue = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            return newValue
        }
        return;
    }

}
