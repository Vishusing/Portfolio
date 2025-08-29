
export default function FloatingShapes() {
  const shapes = [
    { size: 'w-64 h-64', color: 'bg-purple-500', delay: '0s', left: '10%', top: '10%' },
    { size: 'w-32 h-32', color: 'bg-blue-500', delay: '4s', left: '75%', top: '30%' },
    { size: 'w-48 h-48', color: 'bg-indigo-500', delay: '8s', left: '45%', top: '60%' },
  ];

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {shapes.map((shape, index) => (
          <div
            key={index}
            className={`absolute ${shape.size} ${shape.color} rounded-full opacity-10 floating-shape-animate`}
            style={{
              left: shape.left,
              top: shape.top,
              animationDelay: shape.delay,
            }}
          />
        ))}
      </div>
    </>
  );
}