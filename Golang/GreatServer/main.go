package main

import (
	"fmt"
	"log"
	"net/http"
)

func formHandler(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseForm(); err != nil {
		fmt.Fprintf(w, "Parseform() err: %v", err)
		return
	}
	fmt.Fprintf(w, "POST request successfull \n")
	name := r.FormValue("name")
	email := r.FormValue("email")
	message := r.FormValue("message")
	fmt.Fprintf(w, "Name is : %v\n", name)
	fmt.Fprintf(w, "Email is : %v\n", email)
	fmt.Fprintf(w, "Message is : %v\n", message)

}
func helloHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, "Method is not supported for this page", http.StatusNotAcceptable)
		return
	}
	fmt.Fprintf(w, "Hello World!!!")
}

func main() {
	fileServer := http.FileServer(http.Dir("./static"))
	http.Handle("/", fileServer)
	http.HandleFunc("/form", formHandler)
	http.HandleFunc("/hello", helloHandler)

	fmt.Printf("Starting server at port 8080\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
