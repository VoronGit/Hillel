import { Card, Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import styles from "./CardComponent.module.scss";
import moment from "moment";

interface ICardComponentProps {
    user: {
        id: number;
        name: string;
        createdAt: string;
        avatar: string;
        city: string;
        email: string;
        phone: string;
        country: string;
    };
    fetchCallback: () => void;
}

const CardComponent = (props: ICardComponentProps) => {
    const { user, fetchCallback } = props;

    const handleDeleteClick = async (id: number) => {
        try {
            const res = await fetch(
                `https://655dccbd9f1e1093c599e510.mockapi.io/api/v1/users/${id}`,
                {
                    method: "DELETE",
                }
            );
            if (!res.ok) {
                throw new Error("HTTP error! status: " + res.status);
            }
            fetchCallback();
        } catch (e: any) {
            console.error(e.message);
        }
    };

    return (
        <Card>
            <div className={styles.cardContainer}>
                <div>
                    <Link to={user.id}>
                        <div className={styles.flexLineStart}>
                            <Avatar alt={user.name} src={user.avatar} />
                            {user.name}
                        </div>
                    </Link>
                    <div className={styles.infoBlock}>
                        <p>
                            <b>Country:</b> {user.country}
                        </p>
                        <p>
                            <b>City:</b> {user.city}
                        </p>
                        <p>
                            <b>Email:</b> {user.email}
                        </p>
                        <p>
                            <b>Phone:</b> {user.phone}
                        </p>
                    </div>
                </div>
                <div className={styles.flexBetween}>
                    <p>
                        <b>Created:</b>{" "}
                        {moment(user.createdAt).format("DD.MM.YYYY")}
                    </p>
                    <DeleteIcon onClick={() => handleDeleteClick(user.id)} />
                </div>
            </div>
        </Card>
    );
};

export default CardComponent;
