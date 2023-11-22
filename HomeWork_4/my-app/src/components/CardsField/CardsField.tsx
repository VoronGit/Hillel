import { useState, useEffect } from "react";

import styles from "./CardField.module.scss";
import CardComponent from "../CardComponent/CardComponent";
import SkeletonCardComponent from "../CardComponent/SkeletonCardComponent";

const CardsField = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await fetch(
                "https://655dccbd9f1e1093c599e510.mockapi.io/api/v1/users"
            );
            if (!res.ok) {
                throw new Error("HTTP error! status: " + res.status);
            }
            const data = await res.json();
            setUsers(data);
        } catch (e: any) {
            console.error(e.message);
        }
    };

    useEffect(() => {
        fetchUsers();
        const handleKeyPress = (event: any) => {
            console.log(event.key);
            if (["r", "R"].includes(event.key)) {
                fetchUsers();
                setUsers([]);
            }
        };

        window.addEventListener("keypress", handleKeyPress);
        return () => {
            window.removeEventListener("keypress", handleKeyPress);
        };
    }, []);

    return (
        <div className={styles.mainBox}>
            {users.length > 0 ? (
                users.map((user) => (
                    <CardComponent
                        key={user.id}
                        user={user}
                        fetchCallback={fetchUsers}
                    />
                ))
            ) : (
                <>
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                </>
            )}
        </div>
    );
};

export default CardsField;
