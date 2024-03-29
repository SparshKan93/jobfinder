import { useState } from "react";
import PostContext from "./postContext";

const PostState = (props)=>{
    const postsInitial = [
        {
            "_id": "65de4ce3b76f37fb529f6534",
            "image": "nhffnh",
            "role": "fhxfjnf",
            "companyName": "fhfnf",
            "skillsRequired": "ffhhgjmg",
            "stipend": 4536,
            "location": "hhfghhj",
            "endingTime": null,
            "applicantsNo": 45,
            "date": "2024-03-24T20:58:11.083Z",
            "__v": 0
          },
          {
            "_id": "65de47cf7ed1d02f83c1556ac",
            "image": "IMAGE",
            "role": "FRONTEND-DEVELOPER",
            "companyName": "GOOGLE",
            "skillsRequired": "DEV",
            "stipend": 5,
            "location": "PARIS",
            "endingTime": null,
            "applicantsNo": 45,
            "date": "2024-03-12T20:58:31.184Z",
            "__v": 0
          },
          {
            "_id": "65de4cf7ed1d02f83c15565ac",
            "image": "IMAGE",
            "role": "ui-designer",
            "companyName": "GOOGLE",
            "skillsRequired": "DEV",
            "stipend": 5,
            "location": "PARIS",
            "endingTime": null,
            "applicantsNo": 45,
            "date": "2024-03-12T20:58:31.184Z",
            "__v": 0
          },
          {
            "_id": "65de4c6f7ed1d02f83c1556ac",
            "image": "IMAGE",
            "role": "FRONTEND-DEVELOPER",
            "companyName": "GOOGLE",
            "skillsRequired": "DEV",
            "stipend": 5,
            "location": "PARIS",
            "endingTime": null,
            "applicantsNo": 45,
            "date": "2024-03-12T20:58:31.184Z",
            "__v": 0
          },
          {
            "_id": "65de4cf7ed1d02f863c1556ac",
            "image": "IMAGE",
            "role": "FRONTEND-DEVELOPER",
            "companyName": "GOOGLE",
            "skillsRequired": "DEV",
            "stipend": 5,
            "location": "PARIS",
            "endingTime": null,
            "applicantsNo": 45,
            "date": "2024-03-12T20:58:31.184Z",
            "__v": 0
          },
          {
            "_id": "65d6e4cf7ed1d02f83c1556ac",
            "image": "IMAGE",
            "role": "FRONTEND-DEVELOPER",
            "companyName": "GOOGLE",
            "skillsRequired": "DEV",
            "stipend": 5,
            "location": "PARIS",
            "endingTime": null,
            "applicantsNo": 45,
            "date": "2024-03-12T20:58:31.184Z",
            "__v": 0
          },
          {
            "_id": "65de4cf7ed1d062f83c1556ac",
            "image": "IMAGE",
            "role": "FRONTEND-DEVELOPER",
            "companyName": "GOOGLE",
            "skillsRequired": "DEV",
            "stipend": 5,
            "location": "PARIS",
            "endingTime": null,
            "applicantsNo": 45,
            "date": "2024-03-12T20:58:31.184Z",
            "__v": 0
          },
          {
            "_id": "65de54cf7ed1d02f83c1556ac",
            "image": "IMAGE",
            "role": "FRONTEND-DEVELOPER",
            "companyName": "GOOGLE",
            "skillsRequired": "DEV",
            "stipend": 5,
            "location": "PARIS",
            "endingTime": null,
            "applicantsNo": 45,
            "date": "2024-03-12T20:58:31.184Z",
            "__v": 0
          },
          {
            "_id": "65de4cf73ed1d02f83c1556ac",
            "image": "IMAGE",
            "role": "FRONTEND-DEVELOPER",
            "companyName": "GOOGLE",
            "skillsRequired": "DEV",
            "stipend": 5,
            "location": "PARIS",
            "endingTime": null,
            "applicantsNo": 45,
            "date": "2024-03-12T20:58:31.184Z",
            "__v": 0
          },
          {
            "_id": "65d5e4cf7ed1d02f83c1556ac",
            "image": "IMAGE",
            "role": "FRONTEND-DEVELOPER",
            "companyName": "GOOGLE",
            "skillsRequired": "DEV",
            "stipend": 5,
            "location": "PARIS",
            "endingTime": null,
            "applicantsNo": 45,
            "date": "2024-03-12T20:58:31.184Z",
            "__v": 0
          }
        ];
        const [posts, setPosts] = useState(postsInitial)
    return(
        <PostContext.Provider value = {{posts, setPosts}}> 
            {props.children}
        </PostContext.Provider>
    )
}

export default PostState;