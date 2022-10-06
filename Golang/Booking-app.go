package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	var conferenceName = "-The Go way-"
	const conferenceTickets = 50
	var remainingTickets uint = 50
	var bookings []string
	fmt.Printf("Welcome to %v booking application\n", conferenceName)
	fmt.Println("Get your Tickets Now!!! \n We have", remainingTickets, "left out of ", conferenceTickets, "total")

	for len(bookings) < 50 && remainingTickets > 0 {
		var firstName string
		var lastName string
		var email string
		var userTickets uint

		fmt.Print("What's your first name : ")
		fmt.Scanln(&firstName)

		fmt.Print("What's your lastname name : ")
		fmt.Scanln(&lastName)

		fmt.Print("What's your email : ")
		fmt.Scanln(&email)

		fmt.Print("How many tickets do you want ? : ")
		fmt.Scanln(&userTickets)

		isValidName := len(firstName) >= 2 && len(lastName) >= 2
		isValidEmail := strings.Contains(email, "@")
		isValidTickets := userTickets > 0 && userTickets <= remainingTickets

		if isValidName && isValidEmail && isValidTickets {
			var newBooking = "Name : " + firstName + lastName + "\n" + "email : " + email + "\n" + "No. of tickets : " + strconv.Itoa(int(userTickets))

			remainingTickets = remainingTickets - userTickets
			bookings = append(bookings, newBooking)
			fmt.Printf("%v", bookings)
			fmt.Printf("User : %v booked %v tickets, Your tickets will be sent to %v .\n", firstName, userTickets, email)
			fmt.Printf("Thanks, We now have %v tickets left.\n", remainingTickets)

			if remainingTickets == 0 {
				fmt.Print("The tickets are all booked!!!\nPlease wait till next time")
				break
			}
		} else {
			if !isValidName {
				fmt.Println("First name or Last name is too short")
			}
			if !isValidEmail {
				fmt.Println("email address does not contain '@' sign")
			}
			if !isValidTickets {
				fmt.Println("The number of tickets you entered is not valid")
			}
			fmt.Printf("You inputed an invalid data, please try again")
			continue
		}
	}
}
