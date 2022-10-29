import classes from "./Social.module.scss";
import { BsFacebook, BsLinkedin, BsShareFill, BsTwitter } from "react-icons/bs";
import { AiFillGooglePlusSquare } from "react-icons/ai";

const SocialIcons = props => {
  return (
    <div className={classes.icons}>
      <BsFacebook color="#4b70c0" />
      <BsTwitter color="#1da1f2" />
      <AiFillGooglePlusSquare color="#dd4b39" />
      <BsLinkedin color="#3e91c5" />
      <BsShareFill />
    </div>
  );
};

export default SocialIcons;
