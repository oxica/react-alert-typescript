import s from "./Alert.module.css";

type AlertProps = {
  text: string;
  props: any;
};

const Alert: React.FC<AlertProps> = (props) => (
  <p role="alert" className={s[props.props]}>
    {props.text}
  </p>
);

export default Alert;
