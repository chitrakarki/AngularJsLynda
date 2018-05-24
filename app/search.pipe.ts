import { Pipe, PipeTransformer } from '@angular/platform-browser-dynamic';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransformer {
    transform(pipeData, pipeModifier) {
        return pipeData.filer((eachItem) => {
            return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase())
             || 
                   eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase());
        });
    }
}