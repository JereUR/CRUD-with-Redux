import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";

import { deleteIcon, editIcon } from "../utils/Icons.jsx";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
	{
		id: "1",
		name: "JereUR",
		email: "jereur@example.com",
		github: "https://github.com/JereUR",
	},
	{
		id: "2",
		name: "leanlibutti",
		email: "leanlibutti@example.com",
		github: "https://github.com/leanlibutti",
	},
	{
		id: "3",
		name: "example",
		email: "example@example.com",
		github: "https://github.com/example",
	},
];

export default function ListOfUsers() {
	return (
		<Card>
			<Title>
				Usuarios
				<Badge
					style={{
						marginLeft: "8px",
					}}
				>
					{users.length}
				</Badge>
			</Title>

			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell>Nombre</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell style={{ display: "flex", alignItems: "center" }}>
								<img
									src={`https://unavatar.io/github/${item.name}`}
									alt={item.name}
									style={{
										width: "32px",
										height: "32px",
										borderRadius: "50%",
										marginRight: "8px",
									}}
								/>
								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>
								<button type="button">{editIcon}</button>
								<button type="button">{deleteIcon}</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
