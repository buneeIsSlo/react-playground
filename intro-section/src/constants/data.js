import images from "../constants/images";

const dropdownData = [
    {
        title: "Features",
        items: [
            {
                icon: images.todo,
                path: "/todo",
                cName: "",
                text: "Todo List"
            },
            {
                icon: images.calendar,
                path: "/calendar",
                cName: "",
                text: "Calendar"
            },
            {
                icon: images.reminders,
                path: "/reminders",
                cName: "",
                text: "Reminders"
            },
            {
                icon: images.planning,
                path: "/planning",
                cName: "",
                text: "Planning"
            }
        ]
    },
    {
        title: "Company",
        items: [
            {
                icon: images.todo,
                path: "/todo",
                cName: "",
                text: "Todo List"
            },
            {
                icon: images.calendar,
                path: "/calendar",
                cName: "",
                text: "Calendar"
            },
        ]
    },
]

export { Features, dropdownData };