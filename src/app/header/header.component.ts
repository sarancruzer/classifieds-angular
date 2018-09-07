import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.removejscssfile('jquery.min.js','js');
    // this.removejscssfile('plugins.js','js');
    // this.removejscssfile('scripts.js','js');

  //   var script = document.getElementById("goback_script");
  //  script.parentElement.removeChild(script);
   

    // this.loadScript('../../assets/js/jquery.min.js');
    // this.loadScript('../../assets/js/plugins.js');
    // this.loadScript('../../assets/js/scripts.js');
 
  }

  private removeScript(scriptUrl: string) {
   return new Promise((resolve, reject) => {
   const scriptElement = document.createElement('script');
   scriptElement.src = scriptUrl;
   scriptElement.onload = resolve;
   document.body.removeChild(scriptElement);
  })
 }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = scriptUrl;
    scriptElement.onload = resolve;
    document.body.appendChild(scriptElement);
   })
  }
  

   removejscssfile(filename, filetype){
   var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
   var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
   var allsuspects=document.getElementsByTagName(targetelement)
   for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
   if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
       allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
   }
}

}

