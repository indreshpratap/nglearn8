import { StuChapterComponent } from "./chapter/stu-chapter.component";
import { Routes } from "@angular/router";
import { StuDashboardComponent } from "./stu-dashboard.component";

export const containers = [
    StuChapterComponent,
    StuDashboardComponent
];

export const studentRoutes: Routes = [
    { path: "dashboard", component: StuDashboardComponent },
    { path: 'chapter/:chapterId', component: StuChapterComponent },

];