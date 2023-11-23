package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	// Serve static files from the "build" directory for /app
	http.Handle("/resume/", http.StripPrefix("/resume/", http.FileServer(http.Dir("./static"))))

	// Serve static files from the "static" directory for /
	http.Handle("/", http.FileServer(http.Dir("./build")))

	// Handle API routes or other routes as needed
	http.HandleFunc("/api/data", func(w http.ResponseWriter, r *http.Request) {
		// Your API logic here
		fmt.Fprintln(w, "Hello from the API!")
	})

	// Start the server on port 8080
	port := 8080
	fmt.Printf("Server listening on port %d...\n", port)
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
	if err != nil {
		fmt.Println("Error starting server:", err)
		os.Exit(1)
	}
}

