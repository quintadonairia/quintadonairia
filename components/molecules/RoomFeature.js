const RoomFeature = ({ icon: Icon, text }) => {
  return (
    <div className="text-foreground-brand-default text-title-medium flex flex-col items-center gap-2 text-center font-serif">
      <Icon size={32} />
      <p>{text}</p>
    </div>
  );
};

export default RoomFeature;
