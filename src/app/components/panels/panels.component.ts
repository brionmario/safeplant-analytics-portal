import { Component } from '@angular/core';
import { GlobalDataService } from '../../shared/services/global-data.service';
import { IBloodReport } from '../../shared/models/blood-report.model';
import { IUrineReport } from '../../shared/models/urine-report.model';
import {IBloodSugarReport} from "../../shared/models/blood-sugar.model";

@Component({
    moduleId: module.id,
    selector: 'panels-cmp',
    templateUrl: 'panels.component.html'
})

export class PanelsComponent{

    public bloodReports: IBloodReport[];
    public urineReports: IUrineReport[];
    public bloodSugarReports: IBloodSugarReport[];

    constructor(public globalDataService:GlobalDataService) {
        this.bloodReports = [];
        this.urineReports = [];
    }

    ngOnInit() {
        this.globalDataService.getBloodreport().subscribe((result) => {
            this.bloodReports = result;
        });

        this.globalDataService.getUrinereport().subscribe((result) => {
            this.urineReports = result;
        });
        this.globalDataService.getBloodSugar().subscribe((result) => {
            this.bloodSugarReports = result;
        });
    }
}
