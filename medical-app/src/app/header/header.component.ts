import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Get the modal
    const modal = document.getElementById("authModal") as HTMLElement;

    // Get the button that opens the modal
    const btn = document.getElementById("authBtn") as HTMLElement;

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0] as HTMLElement;

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event: MouseEvent) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }
}
