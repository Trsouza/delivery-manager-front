import { notification } from "antd";

function Msg (props: any) {
  return (
    <span className="msg-custom-success">
      <b>Sucesso: </b>{props.note}
    </span>
  )
}

function preNotification () {
  notification.destroy();
  notification.config({
    top: 8,
    placement: "top",
    duration: 80000,

  });
}

export default function SuccessAlert(msg: string) {
  preNotification();
  notification.success({
    className: "container-custom-success",
    style: {padding: "5px 15px 0px 15px"},
    message: <Msg note={msg} />
  });
}  
