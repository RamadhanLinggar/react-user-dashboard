import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Gagal mengambil data");
                }

                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <h1 className="status">Loading...</h1>;
    }

    if (error) {
        return <h1 className="status error">{error}</h1>;
    }

    return (
        <div className="app">
            <header className="header">
                <h1>React User Dashboard</h1>
                <p>Daftar pengguna dari JSONPlaceholder API</p>
            </header>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Cari user..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {filteredUsers.length === 0 ? (
                <p className="not-found">User tidak ditemukan.</p>
            ) : (
                <div className="user-grid">
                    {filteredUsers.map((user) => (
                        <UserCard
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            phone={user.phone}
                            company={user.company.name}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;