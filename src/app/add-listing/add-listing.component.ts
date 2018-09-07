import { Component, OnInit } from '@angular/core';
import $ from "jquery";
declare var $: $;

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss']
})
export class AddListingComponent implements OnInit {

  loadAPI: Promise<any>;

constructor() {        
    this.loadAPI = new Promise((resolve) => {
        this.loadScript();
        resolve(true);
    });
}

loadScript() {        
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
       // require("../../assets/js/plugins.js");
      // require("../../assets/js/scripts.js");
        var dynamicScripts = ["../../assets/js/jquery.min.js","../../assets/js/plugins.js","../../assets/js/scripts.js"];

        for (var i = 0; i < dynamicScripts .length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}

 async ngOnInit() {
    // this.removejscssfile('jquery.min.js','js');
    // this.removejscssfile('plugins.js','js');
    // this.removejscssfile('scripts.js','js');

  //   var script = document.getElementById("goback_script");
  //  script.parentElement.removeChild(script);

      // var script = document.getElementsByTagName("body")[0];
      // script.removeChild(script);

    //   document.getElementById("script1").remove();
    //   var script1 = document.createElement("script");
    //   script1.setAttribute("id", "script1");
    //   script1.setAttribute("src", "../../assets/js/jquery.min.js");
    //   document.body.appendChild(script1);
  
    //   document.getElementById("script2").remove();
    //   var script2 = document.createElement("script");
    //   script2.setAttribute("id", "script2");
    //   script2.setAttribute("src", "../../assets/js/plugins.js");
    //   document.body.appendChild(script2);

    //  document.getElementById("script3").remove();
    //   var script2 = document.createElement("script");
    //   script2.setAttribute("id", "script3");
    //   script2.setAttribute("src", "../../assets/js/scripts.js");
    //   document.body.appendChild(script2);

   

      //  document.getElementById("jquery.min.js").remove();
      //  document.getElementById("plugins.js").remove();
      //  document.getElementById("scripts.js").remove();

      // var remove1 = document.getElementById('script1');
      // if( remove1) remove1.parentNode.removeChild(remove1);
      // var remove2 = document.getElementById('script2');
      // if( remove2) remove2.parentNode.removeChild(remove2);
      // var remove3 = document.getElementById('script3');
      // if( remove3) remove3.parentNode.removeChild(remove3);
      
      // await this.loadScript('../../assets/js/jquery.min.js','script1');
      // await this.loadScript('../../assets/js/plugins.js','script2');
      // await this.loadScript('../../assets/js/scripts.js','script3');

      // require("../../assets/js/jquery.min.js");
      // require("../../assets/js/plugins.js");
      // require("../../assets/js/scripts.js");
     
    
     //   loader ------------------
   

  }

  private removeScript(scriptUrl: string) {
   return new Promise((resolve, reject) => {
   const scriptElement = document.createElement('script');
   scriptElement.src = scriptUrl;
   scriptElement.onload = resolve;
   document.body.removeChild(scriptElement);
  })
 }

  private loadScriptt(scriptUrl: string,id: string) {
    return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = scriptUrl;
    scriptElement.id = id;
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
