import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(title: 'Hello App', home: HomeScreen());
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Container(
            height: 200,
            width: double.infinity,
            color: Colors.red,
          ),
          Container(
            height: 200,
            width: double.infinity,
            color: Colors.green,
          ),
          Container(
            height: 200,
            width: double.infinity,
            color: Colors.blue,
          ),
        ],
      ),
    );
  }
}
