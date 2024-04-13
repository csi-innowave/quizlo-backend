const questions = [
  {
    id: 1,
    question:
      "Which protocol is commonly used for secure communication over a computer network, particularly for web browsing?",
    options: [
      "FTP (File Transfer Protocol)",
      "SMTP (Simple Mail Transfer Protocol)",
      "HTTP (Hypertext Transfer Protocol)",
      "HTTPS (Hypertext Transfer Protocol Secure)",
    ],
  },
  {
    id: 2,
    question: "What is the primary function of a router in a computer network?",
    options: [
      "To connect multiple devices within a local area network (LAN)",
      "To convert digital signals into analog signals for transmission over a telephone line",
      "To filter and forward data packets between computer networks",
      "To store and manage data files on a network server",
    ],
  },
  {
    id: 3,
    question:
      "Which programming language is commonly used for developing mobile applications on the Android platform?",
    options: ["Swift", "Kotlin", "Objective-C", "Java"],
  },
  {
    id: 4,
    question: "What does the term 'LAN' stand for in networking?",
    options: [
      "Local Access Network",
      "Local Area Network",
      "Long-range Area Network",
      "Limited Access Network",
    ],
  },
  {
    id: 5,
    question:
      "Which software development methodology emphasizes adaptability and customer collaboration, with a focus on iterative development cycles?",
    options: ["Waterfall", "Agile", "Scrum", "DevOps"],
  },
  {
    id: 6,
    question:
      "Which type of cyberattack involves overwhelming a system with an excessive amount of traffic, causing it to become unavailable to legitimate users?",
    options: [
      "Phishing attack",
      "Denial-of-Service (DoS) attack",
      "Ransomware attack",
      "SQL injection attack",
    ],
  },
  {
    id: 7,
    question: "What is the purpose of a VPN (Virtual Private Network)?",
    options: [
      "To encrypt data transmitted over a network",
      "To provide secure remote access to a private network",
      "To filter and block malicious websites",
      "To improve the speed and performance of a network",
    ],
  },
  {
    id: 8,
    question:
      "Which programming paradigm focuses on breaking down a problem into smaller, reusable components called objects?",
    options: [
      "Procedural programming",
      "Functional programming",
      "Object-oriented programming",
      "Declarative programming",
    ],
  },
  {
    id: 9,
    question: "What is the purpose of a cookie in web development?",
    options: [
      "To store user preferences and session information",
      "To block unwanted advertisements on a website",
      "To encrypt data transmitted between a web server and a client",
      "To analyze website traffic and generate reports",
    ],
  },
  {
    id: 10,
    question:
      "Which data structure follows the 'last-in, first-out' (LIFO) principle?",
    options: ["Queue", "Stack", "Linked list", "Tree"],
  },
  {
    id: 11,
    question: "What does the term 'SQL' stand for in database management?",
    options: [
      "Structured Query Language",
      "Sequential Query Language",
      "Scripted Query Language",
      "Secure Query Language",
    ],
  },
  {
    id: 12,
    question:
      "Which software testing technique involves subjecting a system or component to a series of progressively more rigorous tests until it fails?",
    options: [
      "Stress testing",
      "Unit testing",
      "Integration testing",
      "Acceptance testing",
    ],
  },
  {
    id: 13,
    question: "What is the purpose of a DNS (Domain Name System) server?",
    options: [
      "To translate domain names into IP addresses",
      "To encrypt data transmitted over the internet",
      "To filter and block malicious websites",
      "To store and manage data files on a network server",
    ],
  },
  {
    id: 14,
    question:
      "Which type of attack involves injecting malicious code into a web application's database query to manipulate the execution of SQL statements?",
    options: [
      "Phishing attack",
      "Denial-of-Service (DoS) attack",
      "Ransomware attack",
      "SQL injection attack",
    ],
  },
  {
    id: 15,
    question: "What does the term 'IDE' stand for in software development?",
    options: [
      "Integrated Development Environment",
      "Interactive Development Environment",
      "Intelligent Design Environment",
      "Integrated Design Environment",
    ],
  },
  {
    id: 16,
    question:
      "Which programming language is commonly used for developing machine learning algorithms and data analysis?",
    options: ["Java", "Python", "C++", "Ruby"],
  },
  {
    id: 17,
    question:
      "What is the purpose of a CDN (Content Delivery Network) in web development?",
    options: [
      "To store and distribute website content to multiple servers worldwide, improving access speed for users",
      "To encrypt data transmitted between a web server and a client",
      "To analyze website traffic and generate reports",
      "To provide secure remote access to a private network",
    ],
  },
  {
    id: 18,
    question: "What is the purpose of a try-catch block in programming?",
    options: [
      " To define a loop that repeats until a certain condition is met",
      "To execute a block of code and handle any errors or exceptions that may occur",
      "To define a block of code that will be executed if a particular condition is true",
      " To declare and initialize a variable within a specific scope",
    ],
  },
  {
    id: 19,
    question: "What is the primary function of a firewall in network security?",
    options: [
      "To connect multiple devices within a local area network (LAN)",
      "To convert digital signals into analog signals for transmission over a telephone line",
      "To filter and forward data packets between computer networks",
      "To store and manage data files on a network server",
    ],
  },
  {
    id: 20,
    question:
      "Which programming language is commonly used for developing mobile applications on the iOS platform?",
    options: ["Swift", "Kotlin", "Objective-C", "Java"],
  },
];

const answers = [3, 2, 3, 1, 1, 1, 1, 2, 0, 1, 0, 0, 0, 3, 0, 1, 0, 1, 2, 0];

module.exports = {
  questions,
  answers,
};
