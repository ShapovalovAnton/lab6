import {Pipe, PipeTransform} from '@angular/core'
import { IAntiques } from '../class/iAntiques'
@Pipe({
    name: 'age',
    standalone: true,
})

export class AgePipe implements PipeTransform {
    private current_year = new Date().getFullYear();
    transform(antiques: IAntiques): string {
         return `${this.current_year - antiques.getYear()} років`;
    }
}