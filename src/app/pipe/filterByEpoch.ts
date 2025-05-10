import {Pipe, PipeTransform} from '@angular/core'
import { IAntiques } from '../class/iAntiques'
@Pipe({
    name: 'filterByEpoch',
    standalone: true,
})

export class filterByEpochPipe implements PipeTransform {
    transform(antiques: IAntiques[], selectedEpoch:any): IAntiques[] {
        if(!antiques) return antiques
        return antiques.filter((element)=>
        element.getYear()>=selectedEpoch.start && element.getYear()<=selectedEpoch.end)
    }
}