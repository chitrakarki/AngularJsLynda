// where we define all the modules we will use in this angular project
// combination of modules put together where we define all the relationships and their dependencies between the modules
// organize all the modules that will use in this project
import { NdModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';


import { AppComponent } from './app.component';
import { ArtistDetailsComponent } from './artist-details.component';
import { ArtistItemComponent } from './artist-item.component';

import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemService } from './media-item.service';

import { FavoriteDirective } from './favorite.directive';


import { SearchPipe } from './search.pipe';
import { CategoryListPipe } from './category-list.pipe';

import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';

import { routing } from './app.routing';

// NgModule decorator where we pass it along a configuration obj
// functions that modify js classes 
// essentially its just a configuration object  
// or settings document for ur specific components
@NgModule({
    // set up 3 things in here
    // imports, declarations(view classes that belong to this module &
    // modules we need for our application to work we may need other modules for other features
    // import modules that we are going to need ie. features
    imports: [
             BrowserModule, 
             FormsModule,
             ReactiveFormsModule,
             HttpModule,
             routing
             ],
             
    // declarations : view classes that belong to this module
             // single component called AppComponent and other sub components
             // allow us to import all of the modules we have in our application AppComponent
             
             declarations: [
                            AppComponent, 
                            ArtistItemComponent, 
                            ArtistDetailsComponent, 
                            SearchPipe, 
                            MediaItemComponent, 
                            MediaItemListComponent, 
                            FavoriteDirective,
                            CategoryListPipe,
                            MediaItemFormComponent
                            ],
                            // Now similar to the declarations property,
                            //the providers property is used to specify 
                            //what things, in this case services, 
                            //will be used in the module. 
                            //But unlike declarations, 
                            //things in the providers get added to a 
                            //root injector, making them available to 
                            //the app as a whole, without needing to 
                            //export them from the angular module. 
                            //So the providers metadata property is 
                            //really telling angular, these are things 
                            //that come from my module that I want you 
                            //to add to the root injector. 
                           
                         providers: [
                                        MediaItemService,
                                        { provide: lookupListToken, useValue: lookupLists },
                                        { provide: XHRBackend, useClass: MockXHRBackend }
                                        
                                        ],
                            // finally we need to define/decide the bootstrap component for your application
                            // the main container of your entire application
                            // think of it root component that has other components
                            bootstrap: [
                                      AppComponent
                                      ]

})
export class AppModule{}

