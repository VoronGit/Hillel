interface ICourse {
    id: number,
    image: string,
    level: string,
    title: string,
    user: {
      avatar: string,
      name: string
    },
    rating: number,
    students: number,
    modules: number,
    finishedModules?: number,
    duration: number,
    isMyCource?: boolean
  }

export const cources: ICourse[] = [
    {
        id: 1,
        image:
            "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
        level: "Intermediate",
        title: "Introduction Basic Programming HTML & CSS",
        user: {
            avatar:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
            name: "John Doe"
        },
        rating: 4.5,
        students: 1234,
        modules: 5,
        duration: 5400
    },
    {
        id: 2,
        image:
            "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
        level: "Intermediate",
        title: "Introduction Basic Programming HTML & CSS",
        user: {
            avatar:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
            name: "John Doe"
        },
        rating: 4.5,
        students: 1234,
        modules: 5,
        finishedModules: 3,
        duration: 5400,
        isMyCource: true
    }
];