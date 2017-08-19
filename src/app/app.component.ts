import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  @Input() loadedFeature: string;

  ngOnInit(){
      this.loadedFeature = 'home';
  }

  ngOnChanges(){

  }


  onNavigate(feature :string){
    this.loadedFeature = feature
  }

  isSection(section: string){
      return this.loadedFeature === section;
  }
}
