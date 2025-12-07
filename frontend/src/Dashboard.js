function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome, {user?.name || "User"}!</h2>
      <p>This is your protected dashboard.</p>
    </div>
  );
}

export default Dashboard;

