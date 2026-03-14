function HighlightedTitle({ text, highlight }: {text: string, highlight: string}) {
  const parts = text.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'i'));
  
  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span
        key={index}
        className="bg-linear-to-r from-primary-light to-primary bg-clip-text text-transparent"
        style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
      >
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default HighlightedTitle