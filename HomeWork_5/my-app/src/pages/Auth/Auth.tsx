import pageStyles from "../Pages.module.scss";

import { Typography } from "@mui/material";

const Auth = () => {
    return (
        <div className={pageStyles.pageContainer}>
                <Typography sx={{ fontSize: 54, fontWeight: 500, margin: 'auto'}}>
                    Auth
                </Typography>
        </div>
    );
};

export default Auth;
