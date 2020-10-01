import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.scss']
})
export class GlobalLoaderComponent implements OnInit {
  @Input() diameter: number = 40;
  constructor() { }

  ngOnInit(): void {
  }

}
