package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/ecom-sample/ecom-client/htmx-go/internal/templates"
)

type User struct {
	Username string
	Email    string
}

func main() {
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/login", loginHandler)
	http.HandleFunc("/user-info", userInfoHandler)

	fmt.Println("Server running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	templates.Index().Render(r.Context(), w)
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	username := r.FormValue("username")
	password := r.FormValue("password")

	// Here, you would typically call your auth service
	// For this example, we'll just check if the username is not empty
	if username == "" {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	// Simulating a successful login
	user := User{
		Username: username,
		Email:    username + "@example.com",
	}

	templates.UserInfo(user).Render(r.Context(), w)
}

func userInfoHandler(w http.ResponseWriter, r *http.Request) {
	// This handler would typically fetch user info from a database or service
	// For this example, we'll use hardcoded data
	user := User{
		Username: "example_user",
		Email:    "example_user@example.com",
	}

	templates.UserInfo(user).Render(r.Context(), w)
}
