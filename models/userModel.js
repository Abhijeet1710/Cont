// # not very Imp
// * Very Very Imp

class User {
    userId;
    name;
    email;
    password;
    phoneNumber;
    address;
    myProjects; // [projectId (Number) , ... ]
    participatedProjects;   // [ projectId (Number), .... ]
    profilePicture; //#

    connections; // [ userId, ... ]
    connectionRequests; // [userId, ... ]

    chat;   // * [ {ParticularUserChat}, ... ]

    // __________________________________
    userName;   //unique
    tagLine;    //string
    liked;  // [projectId, ... ]

    aboutMe;    //text

    // otherDetails
    company;
    location;
    link;
    twitter;


    // notifications    // [ String, ... ]
}

class Msg {
    message;
    dispatchTime;
}

class ParticularUserChat {
    from;   // Number (userId)
    to; //userId

    allMessages;    // [ {Msg}, ... ]
}

const user = {
    userId: 1,
    name: "Abhi",
    email: "abhi@g.com",
    password: "Abhijeet@1710",
    phoneNumber: "7558348607",
    address: "At Sakori",
    myProjects: [1, 2],
    participatedProjects: [],
    profilePicture: "pic",
    connections: [3],
    connectionRequests: [1],

    chat: [
        {
            from: 2,
            to: 1,

            allMessages: [
                {
                    message: "Msg from 1 to 2",
                    dispatchTime: "1:03 25-10-2022"
                }
            ]
        },
        {
            from: 3,
            to: 1,

            allMessages: [
                {
                    message: "Msg from 1 to 2",
                    dispatchTime: "1:03 25-10-2022"
                }
            ]
        },

    ]
}
