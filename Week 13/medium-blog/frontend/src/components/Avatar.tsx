function Avatar({ name, size = 8, fontsize = "sm" }: { name: string, size?: number, fontsize?: string }) {
  const initials = name.split(' ').map(part => part[0]).join('');

  return (
    <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-300 rounded-full`}>
      <span className={`font-medium text-gray-600 text-${fontsize}`}>
        {initials}
      </span>
    </div>
  );
}

export default Avatar;
  