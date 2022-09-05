import images from "../constants/images";

const dropdownData = [
    {
        title: "Features",
        items: [
            {
                icon: images.todo,
                path: "/todo",
                cName: "",
                name: "Todo List"
            },
            {
                icon: images.calendar,
                path: "/calendar",
                cName: "",
                name: "Calendar"
            },
            {
                icon: images.reminders,
                path: "/reminders",
                cName: "",
                name: "Reminders"
            },
            {
                icon: images.planning,
                path: "/planning",
                cName: "",
                name: "Planning"
            }
        ]
    },
    {
        title: "Company",
        items: [
            {
                path: "/history",
                cName: "",
                name: "History"
            },
            {
                path: "/team",
                cName: "",
                name: "Our Team"
            },
            {
                path: "/blog",
                cName: "",
                name: "Blog"
            }
        ]
    },
]

export { dropdownData };