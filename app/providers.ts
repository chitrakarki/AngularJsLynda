import { OpaqueToken } from '@angular/core';

export const lookupListToken = new OpaqueToken('lookupListToken');

//So let's refactor the lookup list value type to use an opaque token. 
//First, let's create a new file called providers.ts in the app folder, 
//and let's move the lookup list value instantiation from the 
//app.module.ts file, and put it into this new file. Now the provider 
//metadata property in the app module is going to need this lookup list 
//variable, so let's add the export keyword in front of the const 
//statement, so that we can import it in the app.module.ts file.
//

export const lookupLists = {
  mediums: ['Movies', 'Series']
};