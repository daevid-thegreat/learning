package main

import "fmt"

func main() {
	var conferenceName = "-The Go way-"
	const conferenceTickets = 50
	var remainingTickets uint = 50
	fmt.Printf("Welcome to %v booking application\n", conferenceName)
	fmt.Println("Get your Tickets Now!!!")
	fmt.Println("We have", remainingTickets, "left out of ", conferenceTickets, "total")

	var userName string
	fmt.Print("What's your name : ")
	fmt.Scanln(&userName)

	var email string
	fmt.Print("What's your email : ")
	fmt.Scanln(&email)

	var userTickets uint
	fmt.Print("How many tickets do you want ? : ")
	fmt.Scanln(&userTickets)

	remainingTickets = remainingTickets - userTickets
	fmt.Printf("User : %v booked %v tickets, Your tickets will be sent to %v .\n", userName, userTickets, email)
	fmt.Printf("Thanks, We now have %v tickets left.\n", remainingTickets)
}
