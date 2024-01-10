import React from "react";
import { AvatarProps } from "../../types/avatar.types";
import { DefaultAvatarBackground, StyledAvatar } from "./styled";

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText, size = 40 }) => {
  return (
    <StyledAvatar size={size}>
      {imageUrl ? (
        <img src={imageUrl} alt={altText} />
      ) : (
        <DefaultAvatarBackground />
      )}
    </StyledAvatar>
  );
};

export default Avatar;
