import { useEffect, useState } from "react";
import * as s from "./style";
import heartRegular from "../../assets/heartRegular.svg";
import heartSolid from "../../assets/heartSolid.svg";
import commentRegular from "../../assets/commentRegular.svg";
import { AuthContext } from "../../contexts/Context";
import { useAppContext } from "../../auth";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";

const ImageActionBar = ({
  numOfLikes,
  numOfComments,
  handleLike,
  postId,
  likeTrack,
  setlikeTrack,
}) => {
  const { state } = useAppContext(AuthContext);
  const [myLikes, setMyLikes] = useState(false);

  const getPost = async () => {
    try {
      const response = await fetch(
        "https://api-4uzdo5gwpq-uc.a.run.app/api/post/" + postId,
        {
          method: "GET",
          headers: {
            authorization: `${state.credential.credentials.token}`,
          },
        }
      );
      let postAPI;
      if (response.ok) {
        postAPI = await response.json();
      } else {
        return;
      }

      postAPI.likes.forEach((post) => {
        if (post.user_id === state.credential.credentials.userId) {
          setlikeTrack(1);
        } else {
          setlikeTrack(0);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (post?.user_id) usersContext.getUserById(post.user_id)
    getPost();
  }, []);

  return (
    <s.Container>
      <div onClick={handleLike}>
        <span>{numOfLikes || ""} likes </span>
        {likeTrack === 0 ? (
          <FiHeart size={20} />
        ) : (
          <BsFillSuitHeartFill size={20} color={"red"} />
        )}
      </div>
      <div>
        <span>{numOfComments || ""} comment </span>
        <FaRegComment size={20} />
      </div>
      <div>
        <span>Share </span>
        <FiShare2 size={20} />
      </div>
    </s.Container>
  );
};

export default ImageActionBar;
