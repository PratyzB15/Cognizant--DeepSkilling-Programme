import Trainer from "./trainer";

const trainers = [
    new Trainer(
        1,
        "John Doe",
        "john@gmail.com",
        "9876543210",
        "React",
        ["React", "JavaScript", "HTML", "CSS"]
    ),

    new Trainer(
        2,
        "Jane Smith",
        "jane@gmail.com",
        "9876543211",
        "Angular",
        ["Angular", "TypeScript", "RxJS"]
    ),

    new Trainer(
        3,
        "Robert Brown",
        "robert@gmail.com",
        "9876543212",
        "Java",
        ["Spring Boot", "Hibernate", "Microservices"]
    ),

    new Trainer(
        4,
        "Alice Wilson",
        "alice@gmail.com",
        "9876543213",
        "Python",
        ["Python", "Django", "Flask"]
    )
];

export default trainers;