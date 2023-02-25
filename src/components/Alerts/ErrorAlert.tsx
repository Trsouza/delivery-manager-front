import { notification } from "antd";

function Msg (props: any) {
  return (
    <span className="msg-custom-error">
      <b>Erro: </b>{props.note}
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

export default function ErrorAlert(msg: string) {
  preNotification();
  notification.error({
    className: "container-custom-error",
    style: {padding: "5px 15px 0px 15px"},
    message: <Msg note={msg} />
  });
}  
