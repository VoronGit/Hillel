import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CardField.module.scss";
import CardComponent from "../CardComponent/CardComponent";
import SkeletonCardComponent from "../CardComponent/SkeletonCardComponent";
import useFetch from "../../hooks/useFetch";

const CardsField = () => {
    const navigate = useNavigate();

    const { data: users, error, isLoading, refetch } = useFetch('https://655dccbd9f1e1093c599e510.mockapi.io/api/v1/users');

    useEffect(() => {
        const handleKeyPress = (event: any) => {
            if (["r", "R"].includes(event.key)) {
                refetch();
            }
        };

        window.addEventListener("keypress", handleKeyPress);
        return () => {
            window.removeEventListener("keypress", handleKeyPress);
        };
    }, []);

    if (error) {
        navigate('/');
        console.log(error);
    }

    return (
        <div className={styles.mainBox}>
            {!isLoading ? (
                users.map((user) => (
                        <CardComponent
                            key={user.id}
                            user={user}
                            fetchCallback={refetch}
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
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                    <SkeletonCardComponent />
                </>
            )}
        </div>
    );
};

export default CardsField;
