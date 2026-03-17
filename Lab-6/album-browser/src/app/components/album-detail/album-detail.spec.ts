import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumDetailComponent } from './album-detail';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AlbumService } from '../../services/album';


class MockAlbumService {
  getAlbum(id: number) {
    return of({ id, userId: 1, title: 'Test Album' });
  }
  updateAlbum(album: any) {
    return of(album);
  }
}

describe('AlbumDetailComponent', () => {
  let component: AlbumDetailComponent;
  let fixture: ComponentFixture<AlbumDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumDetailComponent, CommonModule, FormsModule, RouterTestingModule],
      providers: [
        { provide: AlbumService, useClass: MockAlbumService },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // 👈 деректерді жүктеу үшін
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load album', () => {
    expect(component.album.id).toBe(1);
    expect(component.newTitle).toBe('Test Album');
  });
});
