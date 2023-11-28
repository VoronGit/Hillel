import pageStyles from "../Pages.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface IPostPageProps {
    isAuthorized: boolean;
}

const PostsPage = ({ isAuthorized }: IPostPageProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthorized) {
            navigate("/auth");
        }
    }, [isAuthorized]);

    return <div className={pageStyles.pageContainer}>PostsPage</div>;
};

export default PostsPage;
