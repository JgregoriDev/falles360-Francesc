import style from "./CircleProgressBar.module.css";
const CircleProgressBar = ({ progress, color }) => {
  return (
    <div className={style.background}>
        <div className={style.spinner}></div>
    </div>
  );
};

export default CircleProgressBar;
