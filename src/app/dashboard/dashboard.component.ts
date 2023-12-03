import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  posts: any[] = [
    { title: 'Titre de la publication 1', content: 'Contenu de la publication 1' },
    { title: 'Titre de la publication 2', content: 'Contenu de la publication 2' },
    { title: 'Titre de la publication 3', content: 'Contenu de la publication 3' },
    { title: 'Titre de la publication 1', content: 'Contenu de la publication 1' },
    { title: 'Titre de la publication 2', content: 'Contenu de la publication 2' },
    { title: 'Titre de la publication 3', content: 'Contenu de la publication 3' },
    // Ajoutez d'autres objets de publication au besoin
  ];
}
