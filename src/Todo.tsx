import { FC } from "react";
import { TodoType } from "./types/todo";


export const Todo: FC<Omit<TodoType, "id">> = ({ title, userId, completed = false }) => {
  return (
    <>
      {completed ? 
        (
          <p>{`[完]${title}(${userId})`}</p>
        ) : 
        (
          <p key={userId}>{`[未]${title}(${userId})`}</p>
        )
      }
    </>
  )
};