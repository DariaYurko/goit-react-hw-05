import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="rgb(28, 252, 181)"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      wrapperClass=""
    />
  );
};

export default Loader;
