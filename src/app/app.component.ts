import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'threads-worksapce';

  // public loadScript(url) {
  //   let node = document.createElement('script');
  //   node.src = url;
  //   node.type = 'text/javascript';
  //   document.getElementsByTagName('head')[0].appendChild(node);
  // }

  constructor(private router:Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){

        // #2 jquery 
        if(document.getElementById('jquery') !=null){
          document.getElementById('jquery').remove();
        }
        const jquery = document.createElement('script');
        jquery.src = '../assets/js/jquery.min.js';
        jquery.type = 'text/javascript';
        jquery.async = false;
        jquery.id = "jquery";
        jquery.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(jquery);

        // #3 slick 
        if(document.getElementById('slick') !=null){
          document.getElementById('slick').remove();
        }
        const slick = document.createElement('script');
        slick.src = '../assets/external/slick/slick.min.js';
        slick.type = 'text/javascript';
        slick.async = false;
        slick.id = "slick";
        slick.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(slick);

        // #4 panelmenu (for mobile devices) 
        if(document.getElementById('panelMenu') !=null){
          document.getElementById('panelMenu').remove();
        }
        const panelMenu = document.createElement('script');
        panelMenu.src = '../assets/external/panelmenu/panelmenu.js';
        panelMenu.type = 'text/javascript';
        panelMenu.async = false;
        panelMenu.id = "panelMenu";
        panelMenu.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(panelMenu);

        // #5 lazyLoad
        if(document.getElementById('lazyLoad') !=null){
          document.getElementById('lazyLoad').remove();
        }
        const lazyLoad = document.createElement('script');
        lazyLoad.src = '../assets/external/lazyLoad/lazyload.min.js';
        lazyLoad.type = 'text/javascript';
        lazyLoad.async = false;
        lazyLoad.id = "lazyLoad";
        lazyLoad.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(lazyLoad);

        // #6 instaFeed
        if(document.getElementById('instaFeed') !=null){
          document.getElementById('instaFeed').remove();
        }
        const instaFeed = document.createElement('script');
        instaFeed.src = '../assets/external/instafeed/instafeed.min.js';
        instaFeed.type = 'text/javascript';
        instaFeed.async = false;
        instaFeed.id = "instaFeed";
        instaFeed.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(instaFeed);

        // #7 countDown
        if(document.getElementById('countDown') !=null){
          document.getElementById('countDown').remove();
        }
        const countDown = document.createElement('script');
        countDown.src = '../assets/external/countdown/jquery.countdown.min.js';
        countDown.type = 'text/javascript';
        countDown.async = false;
        countDown.id = "countDown";
        countDown.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(countDown);

        // #8 countDownjqPLugin
        if(document.getElementById('countDownjqPLugin') !=null){
          document.getElementById('countDownjqPLugin').remove();
        }
        const countDownjqPLugin = document.createElement('script');
        countDownjqPLugin.src = '../assets/external/countdown/jquery.plugin.min.js';
        countDownjqPLugin.type = 'text/javascript';
        countDownjqPLugin.async = false;
        countDownjqPLugin.id = "countDownjqPLugin";
        countDownjqPLugin.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(countDownjqPLugin);

        // #9 bootstrapDatepicker
        if(document.getElementById('bootstrapDatepicker') !=null){
          document.getElementById('bootstrapDatepicker').remove();
        }
        const bootstrapDatepicker = document.createElement('script');
        bootstrapDatepicker.src = '../assets/external/bootstrap-datepicker/bootstrap-datepicker.js';
        bootstrapDatepicker.type = 'text/javascript';
        bootstrapDatepicker.async = false;
        bootstrapDatepicker.id = "bootstrapDatepicker";
        bootstrapDatepicker.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(bootstrapDatepicker);

        // #10 themepunch tools
        if(document.getElementById('tools') !=null){
          document.getElementById('tools').remove();
        }
        const tools = document.createElement('script');
        tools.src = '../assets/external/rs-plugin/js/jquery.themepunch.tools.min.js';
        tools.type = 'text/javascript';
        tools.async = false;
        tools.id = "tools";
        tools.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(tools);

        // #11 themepunch revolution
        if(document.getElementById('revolution') !=null){
          document.getElementById('revolution').remove();
        }
        const revolution = document.createElement('script');
        revolution.src = '../assets/external/rs-plugin/js/jquery.themepunch.revolution.min.js';
        revolution.type = 'text/javascript';
        revolution.async = false;
        revolution.id = "revolution";
        revolution.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(revolution);



        // #1 main JS 
        if(document.getElementById('mainJs') !=null){
          document.getElementById('mainJs').remove();
        }
        const main = document.createElement('script');
        main.src = '../assets/js/main.js';
        main.type = 'text/javascript';
        main.async = false;
        main.id = "mainJs";
        main.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(main);

      }  
    });
    
    
  }
}
