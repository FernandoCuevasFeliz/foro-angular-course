import { Component, OnInit } from "@angular/core";
import * as SimpleMDE from "simplemde";

@Component({
  selector: "app-markdown-editor",
  templateUrl: "./markdown-editor.component.html",
  styleUrls: ["./markdown-editor.component.scss"],
})
export class MarkdownEditorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var simplemde = new SimpleMDE({});
  }
}
