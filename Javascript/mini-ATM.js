let atmBalance = 500000
let myBalance = 15000
let withdraw = 2000

if (withdraw > myBalance){
    let message = "Insufficient funds!!!, Your balance is : " + myBalance.toString()
    console.log(message)
}else if(withdraw > atmBalance){
    let message = "We don't have enough cash to disburse, Please Come back later"
    console.log(message)
}else{
    if (withdraw > myBalance){
        let newBalance = withdraw - myBalance
        let message = "Cash disbursed, New balance is : " + newBalance.toString()
        console.log(message)
    }else{
        let newBalance = myBalance - withdraw
        let message = "Cash disbursed, New balance is : " + newBalance.toString()
        console.log(message)
    }
    atmBalance = withdraw - atmBalance
}
