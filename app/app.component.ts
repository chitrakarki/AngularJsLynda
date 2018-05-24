import { Component } from '@angular/core';
import { ArtistItemComponent } from './component.artist-item';

// new class Artist --> new complex Data type used within app component
// which defines the structure of the data which is i can import and 
// place it in the variable which is going to be a constant which means 
//it never changes
// defined in the same class called var ARTIST: Artist[] (Artist) defined in this
// export statement
export class Artist {
    name: string;
    shortname: string;
    reknown: string;
    bio: string;
}
// component decorator, set up for this component
// configuration objects
// define what this component is going to do 
// declare the selector called app  which replaces the <app> 
// tag in the index.html with whatever we have defined in this
// @component type decorator which is in the 
// declared template option <h1>
// 1st way to create--> template: '<h1>Artist Directory</h1>'
// 2nd way --> multi-line template can be defined using the backticks 
// as shown in the code below
// 3rd way to create template is using external files and its reference 
// within the code stored in the partials folder 
// eg. in the code below replace the template: `` with the following
// templateUrl: './partials/app.html'
// run the command on the cmd terminal --> npm start
/**
 * [Instructor] Templates become more powerful when they 
 * can do things that are connected
 * to our component. 
 * Now the simplest way to tie a template to a component is through 
 * interpolation. You can use double curly braces to bind the 
 * property name from your component to your template. 
 * Let's go ahead and check this out. So if I wanted to display
 * something on this label, what I can do is type in something like 
 * this within curly braces and I'm going to add a variable 
 * interpolation here for name.
 * 
 * For styles also you may store them just like the templates in a 
 * external .css file
 * styleUrls: [ './css/app.css' ]
 */
@Component({
    selector: 'app',
    template: `
        <div class="card search"> 
            <h1 class="search-headline">Artist Directory</h1>
            <label class="">search</label>
        </div> <!-- card search -->
        `,
        styles: [
                 `.btn {background-color: green;}`,
                 `.btn:hover {background-color: pink;}`
              ]
})

export class AppComponent {
    artists = ARTISTS;
    currentArtist: Artist;  
    
    showArtist(item) {
        this.currentArtist = item;
    }
//2.12
    onMediaItemDelete(mediaItem){
        // logic to delete a media item
    }

    firstMediaItem = {
            id: 1,
            name: "Firebug",
            medium: "Series",
            category: "Science Fiction",
            year: 2010,
            watchedOn: 1294166565384,
            ifFavorite: false
    };
}

/*export class AppComponent {
    //one way is 
    // name = 'Chitra Karki';
    // another formal way 
    name: string;
    // array of string called artists
    //artists: string[];
    // dealing with an object type
    artists: any;

    onClick(e) {
        this.name = e.target.innerHTML;
        console.log(e.target.innerHTML);
    }
    
    onClick(myItem, myElement) {
        this.name = myItem.name;
        myElement.style.backgroundColor="#FECE4E";
    }
    addArtist(value){
        if(value!==''){
            this.artists.push({
                name: value,
                school: 'Hard Knocks'
            });
        }
    }
    constructor(){
        this.name = 'Hello world!';
         the way to dela with array of string type:
       this.artists = [
                       'Barot Bellingham',
                       'Jonathan Ferrar',
                       'Hillary Post'
                       ]
                       
        this.artists = [
                        {
                            name: 'Barot Bellingham',
                            school: 'Penn State'
                        },
                        {
                            name: 'Jonathan Ferrar',
                            school: 'University of Florida'
                        },
                        {
                            name: 'Hillary Post',
                            school: 'University of Illinois'
                        }
                        ]
    }
}*/

var ARTISTS: Artist[] = [
 {
   "name":"Barot Bellingham",
   "shortname":"Barot_Bellingham",
   "reknown":"Royal Academy of Painting and Sculpture",
   "bio":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
 },
 {
   "name":"Jonathan G. Ferrar II",
   "shortname":"Jonathan_Ferrar",
   "reknown":"Artist to Watch in 2012",
   "bio":"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
 },
 {
   "name":"Hillary Hewitt Goldwynn-Post",
   "shortname":"Hillary_Goldwynn",
   "reknown":"New York University",
   "bio":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
 },
 {
   "name":"Hassum Harrod",
   "shortname":"Hassum_Harrod",
   "reknown":"Art College in New Dehli",
   "bio":"The Art College in New Dehli has sponsored Hassum on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Hassum will be speaking on \"The use and absence of color in modern art\" during Thursday's agenda."
 },
 {
   "name":"Jennifer Jerome",
   "shortname":"Jennifer_Jerome",
   "reknown":"New Orleans, LA",
   "bio":"A native of New Orleans, much of Jennifer's work has centered around abstract images that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost, Jennifer's work also depicts the hope and togetherness of a community that has persevered. Jennifer's exhibit will be discussed during Tuesday's Water in Art theme."
 },
 {
   "name":"LaVonne L. LaRue",
   "shortname":"LaVonne_LaRue",
   "reknown":"Chicago, IL",
   "bio":"LaVonne's giant-sized paintings all around Chicago tell the story of love, nature, and conservation - themes that are central to her heart. LaVonne will share her love and skill of graffiti art on Monday's schedule, as she starts the painting of a 20-foot high wall in the Rousseau Room of Hotel Contempo in front of a standing-room only audience in Art in Unexpected Places."
 },
 {
   "name":"Constance Olivia Smith",
   "shortname":"Constance_Smith",
   "reknown":"Fullerton-Brighton-Norwell Award",
   "bio":"Constance received the Fullerton-Brighton-Norwell Award for Modern Art for her mixed-media image of a tree of life, with jewel-adorned branches depicting the arms of humanity, and precious gemstone-decorated leaves representing the spouting buds of togetherness. The daughter of a New York jeweler, Constance has been salvaging the discarded remnants of her father's jewelry-making since she was five years old, and won the New York State Fair grand prize at the age of 8 years old for a gem-adorned painting of the Manhattan Bridge."
 },
 {
   "name":"Riley Rudolph Rewington",
   "shortname":"Riley_Rewington",
   "reknown":"Roux Academy of Art, Media, and Design",
   "bio":"A first-year student at the Roux Academy of Art, Media, and Design, Riley is already changing the face of modern art at the university. Riley's exquisite abstract pieces have no intention of ever being understood, but instead beg the viewer to dream, create, pretend, and envision with their mind's eye. Riley will be speaking on the \"Art of Abstract\" during Thursday's schedule"
 },
 {
   "name":"Xhou Ta",
   "shortname":"Xhou_Ta",
   "reknown":"China International Art University",
   "bio":"A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art."
 }
]