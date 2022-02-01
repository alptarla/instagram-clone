import classes from './Logo.module.scss';

function Logo() {
  return (
    <div className={classes.logo}>
      <img
        src="/logo.svg"
        alt="instagram"
      />
    </div>
  );
}

export default Logo;
