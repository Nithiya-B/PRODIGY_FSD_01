function Dashboard({ user, onLogout }) {
  return (
    <div>
      <h2>Welcome, {user?.name || "User"}!</h2>
      <p>This is your protected dashboard.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;



