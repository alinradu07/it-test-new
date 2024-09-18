import classes from './Header.module.css'
export default function Header() {
  return (
    <div className={classes.header}>
      <p>IT-TEST</p>
      <div>
          <p>Total Test: 20% completed</p>
          <progress value="20" max="100"></progress>
      </div>
    </div>
  );
}
