const DropdownItem = ({ children, ...rest }) => {
  return (
    <li {...rest} role="menuitem">
      {children}
    </li>
  );
};

export default DropdownItem;
