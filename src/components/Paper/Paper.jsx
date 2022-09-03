import PropTypes from 'prop-types';
import s from './Paper.module.css';
import { Section } from 'shared/styled/Section';

const Paper = props => {
  return (
    <Section>
      <h3 className={s.title}>University info</h3>
      <div className={s.paper}> {props.children}</div>
    </Section>
  );
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
