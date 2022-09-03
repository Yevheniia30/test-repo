import PropTypes from 'prop-types';

const Sidebar = ({ menu }) => {
  return (
    <ul>
      {menu.map(item => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
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
