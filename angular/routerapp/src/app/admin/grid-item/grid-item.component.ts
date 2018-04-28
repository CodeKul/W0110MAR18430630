import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  template: `
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `,
  styles: []
})
export class GridItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
