

const Error = ({message}) => {
  return (
  <div className="mt-[300px] text-center text-3xl">
    <p> üzgünüz işlem gerçekleştirilirken hata oluştu</p>
    <p className="bg-red-500 rounded-lg text-white mt-10">{message}</p>
  </div>
  );
};

export default Error