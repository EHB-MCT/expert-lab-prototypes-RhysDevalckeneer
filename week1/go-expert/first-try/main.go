package main

// Imports
import (
	"fmt"
	"log"
	"net/http"
)

/*
func main() {
	intro()
} 
*/

func intro() {
	fmt.Println("What function would you like to execute? \n\nYou can choose from: \n- helloWorld\n- getMovies")
	var answer string
	fmt.Scan(&answer)

	/* OLD VERSION 
	if answer == "helloWorld" {
		helloWorld();
	} else if answer == "getMovies"{
		getMovies()
	} else {
		fmt.Println("Sorry, no function with this name was found!")
	}
	*/ 

	switch answer {
	case "helloWorld":
		helloWorld()
	case "getMovies":
		getMovies()
	default:
		fmt.Println("Sorry, no function with this name was found!")
	}

}

func helloWorld() {
	fmt.Println("Hello world")
}

func getMovies() {
	fmt.Println("\nHere are some movie recomendations:")
	var movies = []string{ "Jaws", "Lightyear", "Nope", "Windfall", "Jurassic Park"}
	for i := 0; i < len(movies); i++ {
		fmt.Println(movies[i])
	}
	// fmt.Println(movies)
}


/** web **/

func main() {
	fileServer := http.FileServer(http.Dir("./static"))
	http.Handle("/", fileServer)

	fmt.Printf("Starting server at port 3000\n")
	if err := http.ListenAndServe(":3000", nil); err != nil {
		log.Fatal(err)
	}
}

// Index Page
func index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "hello world\n")
	fmt.Fprintf(w, "Requested URL path = %s", r.URL.Path)
}

// About Page
func about(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "about")
}