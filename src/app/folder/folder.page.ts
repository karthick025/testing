import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateUtilService } from '@londonhydro/widget-lib';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  currentDate: string = '';
  constructor(private dateutil: DateUtilService) {}

  ngOnInit() {
    debugger;
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.currentDate = this.dateutil.getMomentObj().toISOString(true);
    debugger;
  }
}
