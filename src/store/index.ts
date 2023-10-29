import { Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { rollbackUser } from "./users/slice";

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
	};

const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type, payload } = action;
		const previousState = store.getState();

		next(action);

		if (type === "users/deleteUserById") {
			const userIdToRemove = payload;
			const userToRemove = previousState.users.find(
				(user) => user.id === userIdToRemove,
			);

			fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
				method: "DELETE",
			})
				.then((res) => {
					if (res.ok) {
						toast.success(`Usuario ${userIdToRemove} eliminado correctamente.`);
					}
				})
				.catch((err) => {
					toast.error(
						`Error al eliminar el usuario ${userIdToRemove}: ${err.message}`,
					);
					if (userToRemove) store.dispatch(rollbackUser(userToRemove));
				});
		}

		if (type === "users/addNewUser") {
			fetch("https://jsonplaceholder.typicode.com/users", {
				method: "POST",
			})
				.then((res) => {
					if (res.ok) {
						toast.success(`Usuario '${payload.name}' guardado correctamente.`);
					}
				})
				.catch((err) => toast.error(err.message));
		}
	};

export const store = configureStore({
	reducer: { users: usersReducer },
	middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
