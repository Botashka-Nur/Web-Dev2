// components/album-photos/album-photos.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService, Photo } from '../../services/album';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotosComponent implements OnInit {

  photos: Photo[] = [];
  loading = true;
  error: string = '';
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    // :id параметрін URL-дан алу
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    // Альбом фотоларын алу
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data: Photo[]) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.error = 'Failed to load photos';
        this.loading = false;
      }
    });
  }

  goBack() {
    // Артқа /albums/:id бетіне қайту
    this.router.navigate(['/albums', this.albumId]);
  }
}