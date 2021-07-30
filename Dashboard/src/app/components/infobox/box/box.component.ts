import { Component, OnInit, Input } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() value: number;
  @Input() title: string;
  @Input() description: string;
  @Input() colors: string[];
  @Input() cutoffs: string[];
  @Input() maincolor: string;
  @Input() numberformat: string;
  @Input() maticon: string;
  @Input() textbehind: boolean;
  itemcolor:string;

  constructor(private api:ApiService) { }


  ngOnInit() {
    this.value = Number(this.value);
    if (!this.numberformat) { this.numberformat = '1.1-1'; }
    if (!this.maincolor) { this.maincolor = this.api.primarycolor; }
    if (!this.cutoffs) { this.cutoffs = []; }
    this.setcolor();
  };

  setcolor() {
    let color = this.maincolor;
    this.itemcolor = this.maincolor;
    
    if (this.cutoffs.length > 0 && this.cutoffs.length == this.colors.length) {
      let i = 0;
      for (let cutvalue of this.cutoffs) {
        if (Number(cutvalue) <= this.value) {
          color = this.colors[i];
        }
        i = i + 1;
      }

    }
    this.itemcolor = color;

  }


}


