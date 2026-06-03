function UserCard() {
  const user = {
    name: "Rishabh",
    role: "React Developer",
    company: "Urban Nest Designs",
  };

  return (
    <div className="card">
      <h2>User Information</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Role:</strong> {user.role}
      </p>

      <p>
        <strong>Company:</strong> {user.company}
      </p>
    </div>
  );
}

export default UserCard;