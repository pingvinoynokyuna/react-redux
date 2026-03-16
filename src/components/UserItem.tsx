import { IUser } from "../models/user"

type UserItemProps = {
    user: IUser;
    remove: (userId: IUser["id"]) => void;
}

export const UserItem = ({ user, remove }: UserItemProps) => {
    return (
        <>
            <div key={user.id}>
                <div>{user.id} - Name: {user.name}</div>
                <div>Age: {user.age}</div>
            </div>
            <button onClick={() => remove(user.id)}>Delete</button>
        </>
    )
}