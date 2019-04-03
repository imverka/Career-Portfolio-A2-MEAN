import { ActivatedRoute } from "@angular/router";
import { BasePageComponent } from "src/app/partials/base-page/base-page.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "verka-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent extends BasePageComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {}
}
