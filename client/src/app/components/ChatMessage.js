export default function ChatMessage({ message }) {
  return (
    <div>
      <div className="mt-4 mb-4">
        <span className="bg-zinc-600 p-2 rounded">{message}</span>
      </div>
    </div>
  );
}
