import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = [
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
		email: "reacte@example.com",
		github: "react",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			return state.filter((user) => user.id !== action.payload);
		},
	},
});

export default usersSlice.reducer;
export const { deleteUserById } = usersSlice.actions;
