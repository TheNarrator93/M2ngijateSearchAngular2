import {Pipe} from 'angular2/core';

@Pipe({
    name: 'positsioonList'
})
export class PositsiooniListPipe {
    transform(mangijad) {
        var categories = [];
        mangijad.forEach(mangijad => {
            if (categories.indexOf(mangijad.category) <= -1) {
                categories.push(mangijad.category);
            }
        });
        return categories.join(', ');
    }
}
