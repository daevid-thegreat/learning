import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

/*  all categories
[
  "age",
  "alone",
  "amazing",
  "anger",
  "anniversary",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communication",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "diet",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "finance",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "gardening",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "motivational",
  "movies",
  "movingon",
  "music",
  "nature",
  "parenting",
  "patience",
  "patriotism",
  "peace",
  "pet",
  "poetry",
  "politics",
  "positive",
  "power",
  "relationship",
  "religion",
  "respect",
  "romantic",
  "sad",
  "science",
  "smile",
  "society",
  "sports",
  "strength",
  "success",
  "sympathy",
  "teacher",
  "technology",
  "teen",
  "thankful",
  "time",
  "travel",
  "trust",
  "truth",
  "war",
  "wedding",
  "wisdom",
  "women",
  "work",
  "christmas",
  "easter",
  "fathersday",
  "memorialday",
  "mothersday",
  "newyears",
  "saintpatricksday",
  "thanksgiving",
  "valentinesday"
]
*/

var category = "mom";
var count = 1;
var headers = {
  "X-RapidAPI-Key": "98f90724ccmshf2c5af9f598d333p112b26jsn9f337839af14",
  "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com"
};

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String quote = "";
  String author = "";

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      appBar: AppBar(
        title: const Text('Random Quotes'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            Padding(
                padding: const EdgeInsets.all(10.0),
                child: Text(quote,
                    style: const TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 25,
                        color: Colors.black45))),
            Padding(
              padding: const EdgeInsets.all(10.0),
              child: Text(author,
                  style: const TextStyle(
                      fontStyle: FontStyle.italic,
                      fontWeight: FontWeight.bold,
                      fontSize: 18,
                      color: Colors.blue)),
            ),
            Center(
              child: ElevatedButton(
                onPressed: () async {
                  var url = Uri.parse(
                      "https://famous-quotes4.p.rapidapi.com/random?category=$category&count=$count");
                  var response = await http.get(
                    url,
                    headers: headers,
                  );
                  var body = jsonDecode(response.body);
                  quote = body[0]["text"];
                  author = body[0]["author"];

                  setState(() {});
                },
                child: const Text('Get some random quotes!!!'),
              ),
            ),
          ],
        ),
      ),
    ));
  }
}
