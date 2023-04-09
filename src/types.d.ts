export interface Posts {
	title: string;
	author: string;
	date: string;
	slug: string;
  description: string;
	tags: string[];
}

type Tags = 
| {name:"Desarrollo web"}
| {name: "Scripting"}
| {name: "Backend"}
| {name: "Javascript"}
| {name: "Nextjs"}
| {name: "Reactjs"}
| {name: "Golang"}
| {name: "Ver todos"}
| {name: "Personal"}

type Themes = 
| "dark"
| "light"