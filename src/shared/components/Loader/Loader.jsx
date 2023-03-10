import DotLoader from 'react-spinners/DotLoader';

const Loader = ({ color, loading, size }) => {
  return (
    <DotLoader
      color={color}
      loading={loading}
      //   cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
