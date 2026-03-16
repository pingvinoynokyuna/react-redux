import { Provider } from "react-redux"
import { UserList } from "./components/UserList"
import { store } from "./store"

export const App = () => {
    return (
        <Provider store={store}>
            <div>
                <UserList />
            </div>
        </Provider>
    )
}