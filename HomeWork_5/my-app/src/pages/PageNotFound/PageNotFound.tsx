import pageStyles from "../Pages.module.scss";

import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className={pageStyles.pageContainer}>
            <Box sx={{ margin: "auto" }}>
                <Typography sx={{ fontSize: 54, fontWeight: 500 }}>
                    404 Page not found
                </Typography>
                <Link to='/'>
                    <Typography sx={{ textAlign: "center" }}>
                        Go home
                    </Typography>
                </Link>
            </Box>
        </div>
    );
};

export default PageNotFound;
