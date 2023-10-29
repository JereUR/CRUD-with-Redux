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

import { useAppSelector } from "../hooks/store.ts";
import { useUserActions } from "../hooks/useUserActions.ts";
import { deleteIcon, editIcon } from "../utils/Icons.tsx";

export default function ListOfUsers() {
	const users = useAppSelector((state) => state.users);
	const { removeUser } = useUserActions();

	return (
		<Card>
			<div className="flex">
				<Title>Usuarios</Title>
				<Badge
					style={{
						marginLeft: "8px",
					}}
				>
					{users.length}
				</Badge>
			</div>
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
								<>
									<img
										src={`https://unavatar.io/github/${item.github}`}
										alt={item.name}
										style={{
											width: "32px",
											height: "32px",
											borderRadius: "50%",
											marginRight: "8px",
										}}
									/>
									{item.name}
								</>
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>
								<button type="button">{editIcon}</button>
								<button type="button" onClick={() => removeUser(item.id)}>
									{deleteIcon}
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
