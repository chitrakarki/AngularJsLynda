import { Pipe, PipeTransformer } from '@angular/platform-browser-dynamic';

@Pipe({
    name: 'categoryList'
  /* pure: true   --> 
   * The other property, pure, helps define if a pipe is stateless or statefull. 
   * Pure means that the pipe will take in data, and will return data without any side effects, 
   * just like pure functions. Now, pipes are pure, or stateless, by default, and this meta data 
   * property is optional. Our pipe will be stateless, so we don't need to include that meta data property. 
   * */    
})

export class CategoryListPipe implements PipeTransform {
    transform(mediaItems) {
        var categories = [];
        mediaItems.forEach(mediaItem.category => {
           if (categories.indexOf(mediaItem.category) <= -1){
               categories.push(mediaItem.category);
           } 
        });
        return categories.join(', ');
    }
}