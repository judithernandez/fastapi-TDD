db.createUser(
{
	user: "judit.hernandez",
	pwd: "300609",
	roles: [
	{
		role: "readWrite",
		db: "clients"
	}]
})