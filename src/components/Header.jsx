import classes from './Header.module.css'
export default function Header() {
  return (
    <div className={`header_padding ${classes.header}`}>
      <p>IT-TEST</p>
      <div>
          <p>Total Test: <span className='completed-text'>20% completed</span></p>
          <progress value="20" max="100"></progress>
      </div>
    </div>
  );
}
