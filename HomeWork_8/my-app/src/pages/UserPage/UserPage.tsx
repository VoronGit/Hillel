import { useParams, useNavigate } from "react-router-dom";
import { Avatar, Typography, Box, Skeleton } from "@mui/material";

import pageStyles from "../Pages.module.scss";
import styles from "./UserPage.module.scss";
import useFetch from "../../hooks/useFetch";

const UserPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, error, isLoading } = useFetch(
        `https://655dccbd9f1e1093c599e510.mockapi.io/api/v1/users?id=${id}`
    );

    if (error) {
        navigate('/');
        console.log(error);
    }

    let user = {};
    if (!isLoading) {
        if (data.length > 0) {
            user = data[0];
        } else {
            navigate("/userNotFound");
        }
    }

    return (
        <div className={pageStyles.pageContainer}>
            <div className={styles.mainLayout}>
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    {!isLoading ? (
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
                        <b>Country:</b>{" "}
                        {!isLoading ? user.country : <Skeleton width='10%' />}
                    </Typography>
                    <Typography className={styles.fakeInline} variant='h5'>
                        <b>City:</b>{" "}
                        {!isLoading ? user.city : <Skeleton width='10%' />}
                    </Typography>
                    <Typography className={styles.fakeInline} variant='h5'>
                        <b>Email:</b>{" "}
                        {!isLoading ? user.email : <Skeleton width='30%' />}
                    </Typography>
                    <Typography className={styles.fakeInline} variant='h5'>
                        <b>Phone:</b>{" "}
                        {!isLoading ? user.phone : <Skeleton width='30%' />}
                    </Typography>
                </Box>
            </div>
        </div>
    );
};

export default UserPage;
