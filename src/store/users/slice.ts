import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
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
	reducers: {},
});

export default usersSlice.reducer;
