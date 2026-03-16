import { useAppDispatch } from '../hooks/use-app-dispatch';
import { useTypedSelector } from '../hooks/user-typed-selector';
import { IUser } from '../models/user';
import { addUserActionCreator, deleteUserActionCreator } from '../store/action-creators/user-action-creators';
import { UserItem } from './UserItem';

export const UserList = () => {
    const { users, loading, error } = useTypedSelector(state => state.users);
    const dispatch = useAppDispatch();

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    const addUser = (value: string | null): void => {
        if (!value) return;

        const [name, age] = value.trim().split(',');
        const id = users[users.length - 1].id + 1;

        dispatch(addUserActionCreator({
            id: id,
            name: name,
            age: Number(age),
        }))
    }

    const removeUser = (userId: IUser["id"]): void => {
        dispatch(deleteUserActionCreator(userId));
    }

    return (
        <div>
            {users.map(user => (
                <UserItem
                    key={user.id}
                    user={user}
                    remove={removeUser} />
            ))}

            <button onClick={() => addUser(prompt('Write value like: "Nike, 34'))}>Add</button>
        </div>
    )
}