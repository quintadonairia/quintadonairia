const RoomFeature = ({ icon: Icon, text }) => {
  return (
    <div className="text-olive flex flex-col items-center gap-2 text-center font-serif text-xl">
      <Icon size={32} />
      <p>{text}</p>
    </div>
  );
};

export default RoomFeature;
