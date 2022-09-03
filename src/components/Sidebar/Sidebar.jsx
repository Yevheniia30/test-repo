import PropTypes from 'prop-types';
import { SidebarStyled, SidebarItem } from './SidebarStyled';

const Sidebar = ({ menu }) => {
  return (
    <SidebarStyled>
      {menu.map((item, i) => (
        <SidebarItem i={i}>{item.name}</SidebarItem>
      ))}
    </SidebarStyled>
  );
};

Sidebar.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Sidebar;
