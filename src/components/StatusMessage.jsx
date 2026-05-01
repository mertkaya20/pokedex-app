const StatusMessage = ({ type, message }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <p
        className={`text-sm ${type === "error" ? "text-red-400" : "text-slate-400"}`}
      >
        {message}
      </p>
    </div>
  );
};

export default StatusMessage;
