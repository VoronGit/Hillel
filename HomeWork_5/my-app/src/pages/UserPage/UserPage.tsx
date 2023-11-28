import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Avatar, Typography, Box, Skeleton } from "@mui/material";

import pageStyles from "../Pages.module.scss";
import styles from "./UserPage.module.scss";

const UserPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const fetchUser = async () => {
        try {
            const res = await fetch(
                `https://655dccbd9f1e1093c599e510.mockapi.io/api/v1/users?id=${id}`
            );
            if (!res.ok) {
                throw new Error("HTTP error! status: " + res.status);
            }
            const data = await res.json();
            if (data.length > 0) {
                setUser(data[0]);
            } else {
                navigate("/userNotFound");
            }
        } catch (e: any) {
            console.error(e.message);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className={pageStyles.pageContainer}>
            <div className={styles.mainLayout}>
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    {user.id !== undefined ? (
                        <>
                            <Avatar
                                sx={{ height: 96, width: 96 }}
                                alt={user.name}
                                src={user.avatar}
                            />
                            <Typography variant='h3' sx={{ width: "90%" }}>
                                {user.name}
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Skeleton
                                variant='circular'
                                width={96}
                                height={96}
                                animation='wave'
                            />
                            <Typography variant='h3' sx={{ width: "90%" }}>
                                <Skeleton
                                    animation='wave'
                                    variant='text'
                                    width='35%'
                                />
                            </Typography>
                        </>
                    )}
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography className={styles.fakeInline} variant='h5'>
                        <b>Country:</b> {user.country ? user.country : <Skeleton width='10%'/>}
                    </Typography>
                    <Typography className={styles.fakeInline} variant='h5'>
                        <b>City:</b> {user.city ? user.city : <Skeleton width='10%'/>}
                    </Typography>
                    <Typography className={styles.fakeInline} variant='h5'>
                        <b>Email:</b> {user.email ? user.email : <Skeleton width='30%'/>}
                    </Typography>
                    <Typography className={styles.fakeInline} variant='h5'>
                        <b>Phone:</b> {user.phone ? user.phone : <Skeleton width='30%'/>}
                    </Typography>
                </Box>
            </div>
        </div>
    );
};

export default UserPage;
