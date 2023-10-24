import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";

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
							<TableCell>
								<img
									src={`https://unavatar.io/github/${item.name}`}
									alt={item.name}
									style={{ width: "32px", height: "32px" }}
								/>
								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>Acciones</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
