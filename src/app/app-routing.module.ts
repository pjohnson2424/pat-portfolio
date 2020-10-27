import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { MystoryComponent} from './mystory/mystory.component';
import { ContactComponent} from './contact/contact.component';
import { PhotoVideoComponent} from './photo-video/photo-video.component';
import { DesignDevelopComponent} from './design-develop/design-develop.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VideoComponent } from './video/video.component';
import { DevelopmentComponent } from './development/development.component';

const routes: Routes = [
  { path: 'my-story', component: MystoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'photo-video', component: PhotoVideoComponent },
  { path: 'design-develop', component: DesignDevelopComponent },
  { path: 'develop', component: DevelopmentComponent },
  { path: 'video', component: VideoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
