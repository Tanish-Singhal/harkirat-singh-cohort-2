
export default function SigninLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="p-2 text-center text-blue-500 font-semibold border-b">
        20% off for the next few days!!!
      </div>
      {children}
    </div>
  );
}