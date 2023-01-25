import 'dart:io';

main() {
  stdout.writeln("What is your name: ?");
  var name = stdin.readLineSync();
  print("Hello $name");
}

// main() {
//   var firstName = "David";
//   String lastName = "Makinde";
//   int age = 20;
//   bool isMale = true;

//   print("My name is $firstName $lastName and I am $age years old");
//   if (isMale == true) {
//     print("I am a boy");
//   } else {
//     print("I am a girl");
//   }
// }
