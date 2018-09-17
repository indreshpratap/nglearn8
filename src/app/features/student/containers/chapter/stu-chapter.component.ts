import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-stu-chapter',
    templateUrl: './stu-chapter.component.html',
    // styleUrls: ['./stu-chapter.component.css']
})
export class StuChapterComponent implements OnInit {
    constructor(private activatedRoutes: ActivatedRoute) { }

    currentChapter;
    ngOnInit(): void {
        console.log("Ng oninit");
        // ***cold*** will get only one time when 
        //component loaded will not get when  
        //your are on same component and only data changing
       // console.log("params", this.activatedRoutes.snapshot.params);
     //   console.log("paramMap", this.activatedRoutes.snapshot.paramMap);
      //  this.currentChapter = this.activatedRoutes.snapshot.params.chapterId;
       

        // observable specific you will get data when only data changes 
        this.activatedRoutes.params.subscribe(data => {
            console.log("get updated one from channel", data);
            // converting to integer
            this.currentChapter = +data.chapterId;
// make call to your backend server to load data for this chapter
            console.log("Convert to number", this.currentChapter);
        })



    }
}
