import { RxBell } from "react-icons/rx";
import { Content, Dot } from "./styled";
import React from "react";
import { NotificationI } from "../../types/notification.types";

const Notification: React.FC<NotificationI> = ({ notification }) => {
  return (
    <Content>
      {notification ? <Dot /> : null}
      <RxBell style={{ width: 30, height: 30 }} />
    </Content>
  );
};
export default Notification;
