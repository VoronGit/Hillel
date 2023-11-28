import pageStyles from "../Pages.module.scss";

import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const UserNotFound = () => {
    return (
        <div className={pageStyles.pageContainer}>
            <Box sx={{ margin: "auto" }}>
                <Typography sx={{ fontSize: 54, fontWeight: 500 }}>
                    User not found
                </Typography>
                <Link to='/users'>
                    <Typography sx={{ textAlign: "center" }}>
                        Go to users
                    </Typography>
                </Link>
            </Box>
        </div>
    );
};

export default UserNotFound;
