package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

type Movie struct {
	ID       string `json:"ID"`
	Isbn     string `json:"isbn"`
	Title    string `json:"title"`
	Director string `json:"director"`
}

type Director struct {
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
}

var movies []Movie

func getMovies(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(movies)
}
func getMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for _, x := range movies {
		if x.ID == params["ID"] {
			json.NewEncoder(w).Encode(x)
			return
		}
	}
	json.NewEncoder(w).Encode(movies)
}
func createMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	
	json.NewEncoder(w).Encode(movies)
}
func updateMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(movies)
}

func deleteMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, x := range movies {
		if x.ID == params["ID"] {
			movies = append(movies[:index], movies[index+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(movies)
}
func main() {
	r := mux.NewRouter()

	movies = append(movies, Movie{ID: "1", Isbn: "45365546", Title: "Teen Wolf", Director: &Director{Firstname: "TG", Lastname: "Omori"}})
	movies = append(movies, Movie{ID: "2", Isbn: "24356783", Title: "Hello World", Director: &Director{Firstname: "Dammy", Lastname: "Twitch"}})
	r.HandleFunc("/movies", getMovies).Methods("GET")
	r.HandleFunc("/movies/{{id}}", getMovie).Methods("GET")
	r.HandleFunc("/movies", createMovie).Methods("POST")
	r.HandleFunc("/movies/{{id}}", updateMovie).Methods("PUT")
	r.HandleFunc("/movies/{{id}}", deleteMovie).Methods("DELETE")

	fmt.Println("Starting at port :5000")
	log.Fatal(http.ListenAndServe(":8000", r))
}
