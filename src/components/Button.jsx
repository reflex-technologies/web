import ButtonSvg from "../assets/svg/ButtonSvg"

const Button = ({ className, href, onClick, children, px, white, textWhite }) => {

  const classes = `button relative inline-flex items-center 
  justify-center h-11 transition-colors hover:text-color-1
  ${ px || "px-7"} ${ textWhite ? "text-n-1" : "text-n-8"}
  ${className || ""}`;

  const spanClasses = "relative z-10"

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        {white ? ButtonSvg(white) : ""}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {white ? ButtonSvg(white) : ""}
    </a>
  );

    return href ? renderLink() : renderButton();
};

export default Button;
