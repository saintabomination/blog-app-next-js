import { FunctionComponent } from 'react';

type Props = {
    post: {
        title: string;
        excerpt: string;
    };
};

const PostCard: FunctionComponent<Props> = ({ post }) => {
    return (
        <div>
            <p>{post.title}</p>
            <p>{post.excerpt}</p>
        </div>
    );
}

export default PostCard;
