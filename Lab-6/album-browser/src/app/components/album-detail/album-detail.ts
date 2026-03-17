import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';


export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css'],
  standalone: true, 
  imports: [CommonModule, FormsModule] 
})
export class AlbumDetailComponent implements OnInit {
  albumId!: number;
  album!: Album; 
  newTitle: string = '';
  loading = false;
  saving = false;
  error: string = '';

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private router: Router) {}

  ngOnInit() {
    this.albumId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchAlbum();
  }

  fetchAlbum() {
    this.loading = true;
    this.albumService.getAlbum(this.albumId).subscribe({
      next: (data: Album) => {
        this.album = data;
        this.newTitle = data.title;
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.error = 'Album could not be loaded';
        this.loading = false;
      }
    });
  }

  save() {
    this.saving = true;
    const updatedAlbum: Album = { ...this.album, title: this.newTitle };
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (data: Album) => {
        this.album = data;
        this.saving = false;
        alert('Saved!');
      },
      error: (err: any) => {
        console.error(err);
        this.saving = false;
        alert('Error saving album');
      }
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }

  viewPhotos() {
    this.router.navigate(['/albums', this.albumId, 'photos']);
  }
}