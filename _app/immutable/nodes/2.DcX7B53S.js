import{t as a,b as p}from"../chunks/DL8tNbz8.js";import"../chunks/CRYav5_u.js";import{K as i,N as n,ak as r}from"../chunks/Ch562YeU.js";import{i as m}from"../chunks/BFsoLQgg.js";import{o as c}from"../chunks/BQzKjwQt.js";console.log("test index");const d=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));var g=a('<h1>index page</h1> <img src="https://pokeroguedex.github.io/p/public/images/items.png" alt="poke items">',1);function x(o,t){i(t,!1),c(async()=>{const e=(await(await fetch("/p/src/data/pokemon-species.ts")).text()).match(/new\s*PokemonSpecies\(Species\..*?(?=new\s*PokemonSpecies|;)/igs);e&&console.log(e[0])}),m();var s=g();r(2),p(o,s),n()}export{x as component,d as universal};
