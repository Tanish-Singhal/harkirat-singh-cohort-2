import Avatar from "./Avatar";

export const Appbar = () => {
  return (
    <div className="border-b border-slate-200 flex justify-between items-center px-10 py-4">
      <h1 className="font-bold text-2xl">Bloggy ^_^</h1>
      
      <Avatar name="Tanish Singhal" size={10} fontsize="md" />
    </div>
  );
}