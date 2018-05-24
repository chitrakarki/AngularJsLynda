import { Component, Input , Output, EventEmitter } from '@angular/core';
/*the Input Decorator is designed to be put on a class property.*/

@Component({
    selector: 'mw-media-item',
    templateUrl: 'app/media-item.component.html',
    styleUrls: ['app/media-item.component.css']    
})

/*new class property called mediaItem AND DECORATE IT WITH @Input decorator */
    
export class MediaItemComponent { 
    name = 'The Redemption';

    /*@Input('mediaItemToWatch') mediaItem; -- mediaItemToWatch is the alias for mediaItem*/
    @Input() mediaItem;
    @Output() delete = new EventEmitter();

    wasWatched(){
        return true;
    }
   // 2.12
    onDelete(){
        this.delete.emit(this.mediaItem);
        console.log('deleted!');
    }
}