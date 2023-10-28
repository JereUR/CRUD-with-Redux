import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "JereUR",
		email: "jereur@example.com",
		github: "JereUR",
	},
	{
		id: "2",
		name: "Microsoft",
		email: "microsoft@example.com",
		github: "microsoft",
	},
	{
		id: "3",
		name: "React",
		email: "react@example.com",
		github: "react",
	},
];

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			return state.filter((user) => user.id !== action.payload);
		},
	},
});

export default usersSlice.reducer;
export const { deleteUserById, addNewUser } = usersSlice.actions;
