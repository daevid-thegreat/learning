from random import randint

computer_point = 0
player_point = 0


def play_game():
    global computer_point, player_point
    while computer_point < 3 or player_point < 3:
        computer = randint(1, 3)
        player = input("Input r for Rock, p for Paper, and s for Scissors: ")

        def computer_rock():
            global player_point, computer_point
            if player == "r":
                print("It's a tie!")
                print("We both chose rock!")
            elif player == "p":
                player_point += 1
                print("You Won!")
                print("I chose Rock and You chose Paper, You covered me!")
            elif player == "s":
                computer_point += 1
                print("I won!")
                print("I chose Rock, and you chose scissors, I crushed you!")
            else:
                print(" Invalid response")
            print("Your Score: {}".format(player_point))
            print("Computer Score: {}".format(computer_point))

        def computer_paper():
            global player_point, computer_point
            if player == "r":
                computer_point += 1
                print("I Won!")
                print("I chose Paper, you chose rock, I covered you!")
            elif player == "p":
                print("It's a tie!")
                print("We both chose Paper!")
            elif player == "s":
                player_point += 1
                print("You won!")
                print("I chose Paper, and you chose scissors, You cut me!")
            else:
                print(" Invalid response")
            print("Your Score: {}".format(player_point))
            print("Computer Score: {}".format(computer_point))

        def computer_scissors():
            global player_point, computer_point
            if player == "r":
                player_point += 1
                print("You won!")
                print("I chose Scissors and you chose Rock, You crushed me!")
            elif player == "p":
                computer_point += 1
                print("I Won!")
                print("I chose Scissors and You chose Paper, I cut you!")
            elif player == "s":
                print("It's a tie!")
                print("We both chose scissors!")
            else:
                print(" Invalid response")
            print("Your Score: {}".format(player_point))
            print("Computer Score: {}".format(computer_point))

        if computer == 1:
            computer_rock()
        if computer == 2:
            computer_paper()
        if computer == 3:
            computer_scissors()

        if computer_point == 3:
            print("Computer Won")
            break
        if player_point == 3:
            print("You Won")
            break


play_game()
