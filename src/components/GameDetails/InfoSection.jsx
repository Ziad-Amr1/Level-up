export default function InfoSection({ game }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[var(--text-secondary)]">{game.description}</p>
      <div className="flex flex-wrap gap-2">
        {game.platforms?.map((p, i) => <span key={i} className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm">{p}</span>)}
        {game.genres?.map((g, i) => <span key={i} className="px-3 py-1 bg-gray-800 text-[var(--accent-gold)] rounded-full text-sm">{g}</span>)}
      </div>
      <ul className="list-disc list-inside text-[var(--text-secondary)]">
        {game.features?.map((f, idx) => <li key={idx}>{f}</li>) || <li>No features.</li>}
      </ul>
      {game.system_requirements?.pc && (
        <div className="bg-[var(--secondary-dark)]/50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg">System Requirements (PC)</h3>
          <ul className="text-[var(--text-secondary)] space-y-1">
            <li><strong>OS:</strong> {game.system_requirements.pc.os}</li>
            <li><strong>Processor:</strong> {game.system_requirements.pc.processor}</li>
            <li><strong>Memory:</strong> {game.system_requirements.pc.memory}</li>
            <li><strong>Graphics:</strong> {game.system_requirements.pc.graphics}</li>
            <li><strong>Storage:</strong> {game.system_requirements.pc.storage}</li>
          </ul>
        </div>
      )}
      {game.reviews?.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-bold text-[var(--accent-gold)]">Reviews</h3>
          {game.reviews.map((r, idx) => (
            <div key={idx} className="bg-[var(--secondary-dark)]/50 p-3 rounded-lg mt-2">
              <p className="font-semibold">{r.user} - {r.rating} ⭐</p>
              <p className="text-[var(--text-secondary)]">{r.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}