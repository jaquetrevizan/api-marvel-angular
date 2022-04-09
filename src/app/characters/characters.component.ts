import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from './character/shared/characters-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  allCharacters: Observable<any>

  constructor(private characterSvc: CharactersApiService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters() {
    this.allCharacters = this.characterSvc.getAllCharacters()
  }

}
