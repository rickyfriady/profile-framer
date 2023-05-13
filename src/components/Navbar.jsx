const Navbar = () => {
  const changeNav = () => {
    console.log(window.scrollY);
  };
  window.addEventListener('scroll', changeNav);

  return <div>Navbar</div>;
};

export default Navbar;
