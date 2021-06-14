import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  cabecera : Array<Object> = [
    {
      ruta: '/', 
      clase: 'one' , 
      texto: 'Home',
    },
    {
      ruta: '/works', 
      clase: 'two' , 
      texto: 'Portfolio',
    },
    {
      ruta: '/skills', 
      clase: 'three' , 
      texto: 'Skills',
    },
    {
      ruta: '/about', 
      clase: 'four' , 
      texto: 'About me',
    },
    {
      ruta: '/contact', 
      clase: 'five' , 
      texto: 'Contact',
    }

  ]

  trabajosWeb : Array<Object> = [
    {
      clase:'type1',
      h3 : 'Inercia Design', 
      img:'/assets/img/Inercia.jpg',
      alt: 'Inercia Design',
      p:"Inercia Design is a company that takes care of the branding, logo design and identity of its clients' websites. In this project I was in charge of the layout of the entire website.",
      btn: 'Visit the website', 
      url:'http://www.inerciadesign.com/',
    },
    {
      clase:'type2',
      h3 : 'Movida Games', 
      img:'/assets/img/Movida.jpg',
      alt: 'Movida Games',
      p:'Movida games is a small video game company that is developing a narrative game set in a Spanish town. In this project, I took care of the layout of the website based on the design they offered me.',
      btn: 'Visit the website', 
      url:'http://movidagames.com/',
    },
    {
      clase:'type1 hidden',
      h3 :'Sol' , 
      img:'/assets/img/SOL.jpg',
      alt: 'Sol Center',
      p:'Sol Center is a project to create a platform, exclusively in online format, for learning Spanish for foreigners through courses that can be studied from anywhere, fast and comfortably. My job is the html and Sass layout of the website, along with the localization of it.',
      btn: 'Visit the website', 
      url:'https://www.solspanishcenter.com/',
    },
    {
      clase:'type2',
      h3 : 'María Castellano', 
      img:'/assets/img/PortfolioMaria.png',
      alt: 'Maria Castellano',
      p:'This page is a portfolio of a graphic designer who specializes in web design and branding.',
      btn: 'Visit the website', 
      url:'https://mariacastellano.000webhostapp.com',
    },
    {
      clase:'type1 hidden',
      h3 : 'Make Good Art', 
      img:'/assets/img/MGA.jpg',
      alt: 'MGA',
      p:'Make Good Art is a marketing and communication company specialized in content management, as well as communication services for brands related to entertainment and indie video game studios. I am making the layout of the Make Good Art website and its content, using the Wordpress tool.',
      span: 'Premiere soon',
    },
    

  ]

  listaHabilidades : Array<object> = [
    {
      src:'/assets/img/html5.png', 
      alt:'Html5',
    },
    {
      src:'/assets/img/css3.png', 
      alt:'Css3',
    },
    {
      src:'/assets/img/javascript.png', 
      alt:'JS',
    },
    {
      src:'/assets/img/sass.png', 
      alt:'Sass',
    },
    {
      src:'/assets/img/angular.png', 
      alt:'Angular',
    },
    {
      src:'/assets/img/jquery.png',  
      alt:'Jquery',
    }
  ]
  
  constructor() { }
}
