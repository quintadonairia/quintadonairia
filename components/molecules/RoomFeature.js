const RoomFeature = ({ icon: Icon, text }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center font-serif text-xl text-olive">
      <Icon size={32} />
      <p>{text}</p>
    </div>
  );
};

export default RoomFeature;
