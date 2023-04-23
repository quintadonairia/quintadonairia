const RoomFeature = ({ icon: Icon, text }) => {
  return (
    <div className="flex flex-col items-center text-center gap-2 font-serif text-xl text-olive">
      <Icon className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};

export default RoomFeature;
