import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

export function CreateNewUser() {
	const { addUser } = useUserActions();

	const [result, setResult] = useState<"ok" | "ko" | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setResult(null);

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			return setResult("ko");
		}

		addUser({ name, email, github });

		setResult("ok");
		form.reset();
	};

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title style={{ marginBottom: "16px" }}>Create new user</Title>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col gap-4">
					<TextInput name="name" placeholder="Ingrese nombre..." />
					<TextInput id="email" name="email" placeholder="Ingrese email..." />
					<TextInput name="github" placeholder="Ingrese usuario de github..." />
					<Button type="submit">Save User</Button>
				</div>
				<span>
					{result === "ok" && (
						<Badge color="green">Guardado correctamente</Badge>
					)}
					{result === "ko" && <Badge color="red">Error con los campos</Badge>}
				</span>
			</form>
		</Card>
	);
}
