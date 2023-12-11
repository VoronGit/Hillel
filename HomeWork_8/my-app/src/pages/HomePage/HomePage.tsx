import pageStyles from "../Pages.module.scss";

import { Typography } from "@mui/material";

const HomePage = () => {
    return (
        <div className={pageStyles.pageContainer}>
                <Typography sx={{ fontSize: 54, fontWeight: 500, margin: 'auto'}}>
                    Welcome to my Site!
                </Typography>
        </div>
    );
};

export default HomePage;
