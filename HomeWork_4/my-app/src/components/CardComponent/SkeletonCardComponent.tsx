import { Card, Skeleton } from "@mui/material";

import styles from "./CardComponent.module.scss";

const SkeletonCardComponent = () => {
    return (
        <Card>
            <div className={styles.cardContainer}>
                <div>
                    <div className={styles.flexLineStart}>
                        <Skeleton
                            animation='wave'
                            variant='circular'
                            width={40}
                            height={40}
                        />
                        <Skeleton
                            animation='wave'
                            variant='text'
                            sx={{ fontSize: "1rem", width: '70%'}}
                        />
                    </div>
                    <div className={styles.infoBlock}>
                        <Skeleton
                            animation='wave'
                            variant='rectangular'
                            width={220}
                            height={150}
                        />
                    </div>
                </div>
                <div className={styles.flexBetween}>
                    <Skeleton
                        animation='wave'
                        variant='text'
                        sx={{ fontSize: "1rem", width: '70%'}}
                    />
                    <Skeleton
                            animation='wave'
                            variant='rectangular'
                            width={20}
                            height={20}
                        />
                </div>
            </div>
        </Card>
    );
};

export default SkeletonCardComponent;
