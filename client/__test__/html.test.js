/**
 *  @jest-environment jsdom
 */

 const fs = require("fs");
 const path = require("path");
 const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
 
 describe("index.html", () => {
   beforeEach(() => {
     document.documentElement.innerHTML = html.toString();
   });
   describe("head", () => {
     it("it has a title", () => {
       let title = document.querySelector("head");
       expect(title).toBeTruthy();
       expect(title.textContent).toContain("Factopia");
     });
     test("Favicon is present", () => {
       let favicon = document.querySelector('link[rel="icon"]');
       expect(favicon).toBeTruthy();
     });
   });
 
   describe("body", () => {
     let body = document.querySelector("body");
     it("it has a body", () => {
       expect(body).toBeTruthy();
     });
 
     it("the body contains certain tags", () => {
       let body = document.querySelector("body");
       let nav = document.querySelector("nav");
       let main = document.querySelector("main");
       let div = document.querySelector("div");
       expect(body.textContent).toContain(main.textContent);
       expect(body.textContent).toContain(nav.textContent);
       expect(body.textContent).toContain(div.textContent);
     });
   });
 
   describe("navigation bar", () => {
     it("exists and has one element", () => {
       let nav = document.querySelector("nav");
       expect(nav).toBeTruthy();
       expect(nav.children.length).toEqual(1);
       expect(nav.textContent).toEqual("Factopia - Home");
     });
   });
 
   describe("invisible modal", () => {
     it("the modal has a class", () => {
       let div = document.querySelector("div");
       let btn = document.querySelector("button");
       let divWeWant = document.querySelector(".modal");
       expect(div).toBeTruthy();
       expect(div.textContent).toContain(btn.textContent);
       expect(div).toHaveProperty("hidden");
     });
     it("the modal has a hidden class", () => {
       let div = document.querySelector("div");
       expect(div).toHaveProperty("hidden");
       let hiddenClass = document.querySelector(".hidden");
       expect(div).toEqual(hiddenClass);
     });
     it("the button has a cross on it", () => {
       let btn = document.querySelector("button");
       expect(btn).toBeTruthy();
       expect(btn.textContent).toEqual("×");
     });
 
     describe("the modal contains a form", () => {
       it("the form exists and is in the modal", () => {
         let div = document.querySelector(".modal");
         let form = document.querySelector("form");
         expect(form).toBeTruthy();
         expect(div.innerHTML).toContain(form.innerHTML);
       });
       it("the form has two text inputs", () => {
         let form = document.querySelector(".modal__form");
         let textinput1 = document.querySelector("#fact-question");
         let textinput2 = document.querySelector("#fact-description");
         expect(textinput1).toBeTruthy();
         expect(textinput2).toBeTruthy();
         expect(form.innerHTML).toContain(textinput1.innerHTML);
         expect(form.innerHTML).toContain(textinput2.innerHTML);
         expect(textinput1.tagName).toEqual("INPUT");
         expect(textinput2.tagName).toEqual("TEXTAREA");
         expect(textinput1).toHaveProperty("required");
         expect(textinput1).toHaveProperty(
           "placeholder",
           "Fact question here (Max length 200 characters)"
         );
         expect(textinput2).toHaveProperty("placeholder", "Enter fact here!");
         expect(textinput2).toHaveProperty("required");
         expect(textinput1).toHaveProperty("id", "fact-question");
         expect(textinput2).toHaveProperty("id", "fact-description");
       });
 
       describe("the form has a button to post", () => {
         it("the button exists & submits", () => {
           let postBtn = document.querySelector(".btn");
           let form = document.querySelector(".modal__form");
           expect(postBtn).toBeTruthy();
           expect(form.innerHTML).toContain(postBtn.innerHTML);
           expect(postBtn).toHaveProperty("type", "submit");
           expect(postBtn.textContent).toEqual("Post →");
         });
       });
     });
   });
 });
